/* Local dev server: serves the demo and proxies ElevenLabs so the API key never reaches the browser.
   Run: node server.js   then open http://localhost:8787/
   Reads ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID from .env (git-ignored). No dependencies. */
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = __dirname;
const CACHE = path.join(ROOT, "audio-cache");
const PORT = Number(process.env.PORT || 8787);
const MODEL = "eleven_multilingual_v2";

function loadEnv() {
  const env = {};
  try {
    fs.readFileSync(path.join(ROOT, ".env"), "utf8").split("\n").forEach((line) => {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m && !line.trim().startsWith("#")) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    });
  } catch (e) { /* no .env */ }
  return env;
}

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".mp3": "audio/mpeg" };

function send(res, status, body, type = "application/json") {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(typeof body === "string" || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}

// Turn ElevenLabs character timings into word timings.
function wordsFrom(alignment) {
  const chars = alignment.characters;
  const starts = alignment.character_start_times_seconds;
  const ends = alignment.character_end_times_seconds;
  const words = [];
  let cur = null;
  chars.forEach((ch, i) => {
    if (/\s/.test(ch)) { if (cur) { words.push(cur); cur = null; } return; }
    if (!cur) cur = { w: "", start: starts[i], end: ends[i] };
    cur.w += ch;
    cur.end = ends[i];
  });
  if (cur) words.push(cur);
  return words;
}

async function generate(text, env) {
  const voice = env.ELEVENLABS_VOICE_ID;
  const hash = crypto.createHash("sha1").update(`${voice}|${MODEL}|${text}`).digest("hex").slice(0, 16);
  fs.mkdirSync(CACHE, { recursive: true });
  const mp3 = path.join(CACHE, `${hash}.mp3`);
  const meta = path.join(CACHE, `${hash}.json`);
  if (fs.existsSync(mp3) && fs.existsSync(meta)) {
    return { id: hash, cached: true, ...JSON.parse(fs.readFileSync(meta, "utf8")) };
  }
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}/with-timestamps`, {
    method: "POST",
    headers: { "xi-api-key": env.ELEVENLABS_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ text, model_id: MODEL })
  });
  if (!r.ok) {
    const detail = await r.text();
    const err = new Error(`ElevenLabs ${r.status}: ${detail.slice(0, 300)}`);
    err.status = r.status;
    throw err;
  }
  const data = await r.json();
  fs.writeFileSync(mp3, Buffer.from(data.audio_base64, "base64"));
  const words = wordsFrom(data.normalized_alignment || data.alignment);
  const duration = words.length ? words[words.length - 1].end : 0;
  const info = { url: `/audio-cache/${hash}.mp3`, duration, words, text };
  fs.writeFileSync(meta, JSON.stringify(info));
  return { id: hash, cached: false, ...info };
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (url.pathname === "/api/status") {
      const env = loadEnv();
      return send(res, 200, { key: Boolean(env.ELEVENLABS_API_KEY), voice: Boolean(env.ELEVENLABS_VOICE_ID) });
    }
    if (url.pathname === "/api/generate" && req.method === "POST") {
      const env = loadEnv();
      if (!env.ELEVENLABS_API_KEY || !env.ELEVENLABS_VOICE_ID) return send(res, 400, { error: "Missing ELEVENLABS_API_KEY or ELEVENLABS_VOICE_ID in .env" });
      let raw = "";
      for await (const chunk of req) raw += chunk;
      const text = String(JSON.parse(raw || "{}").text || "").trim();
      if (!text) return send(res, 400, { error: "No text" });
      return send(res, 200, await generate(text, env));
    }
    // static files
    let file = decodeURIComponent(url.pathname);
    if (file.endsWith("/")) file += "index.html";
    const full = path.join(ROOT, file);
    const base = path.basename(full);
    if (!full.startsWith(ROOT) || base.startsWith(".") || ["server.js"].includes(base) || !fs.existsSync(full) || fs.statSync(full).isDirectory()) {
      return send(res, 404, "Not found", "text/plain");
    }
    send(res, 200, fs.readFileSync(full), TYPES[path.extname(full)] || "application/octet-stream");
  } catch (e) {
    send(res, e.status || 500, { error: e.message });
  }
}).listen(PORT, () => console.log(`Demo + ElevenLabs proxy on http://localhost:${PORT}/`));
