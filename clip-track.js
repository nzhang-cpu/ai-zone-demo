/* Builds one audio track from the per-line ElevenLabs clips saved by manage.html.
   window.buildClipTrack("knowledge" | "case") resolves to null when the demo
   has no complete set of clips (the walkthrough then plays the original mp3).
   Needs the demo served by node server.js, which hosts /audio-cache. */
(function () {
  const STORE = "nl-demo-scripts-v1";
  const GAP = 0.45; // seconds of silence between lines

  function readDemo(id) {
    let all;
    try { all = JSON.parse(localStorage.getItem(STORE) || "null"); } catch (e) { return null; }
    const demo = Array.isArray(all) ? all.find((item) => item.id === id) : null;
    if (!demo || !demo.lines.length) return null;
    if (!demo.lines.every((line) => line.voice.trim() && line.audio && line.audio.url)) return null;
    return demo;
  }

  function wavUrl(samples, rate) {
    const buf = new ArrayBuffer(44 + samples.length * 2);
    const v = new DataView(buf);
    const str = (o, s) => { for (let i = 0; i < s.length; i += 1) v.setUint8(o + i, s.charCodeAt(i)); };
    str(0, "RIFF"); v.setUint32(4, 36 + samples.length * 2, true); str(8, "WAVE"); str(12, "fmt ");
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
    str(36, "data"); v.setUint32(40, samples.length * 2, true);
    for (let i = 0; i < samples.length; i += 1) {
      const s = Math.max(-1, Math.min(1, samples[i]));
      v.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
  }

  // Match the words shown on screen to the words ElevenLabs timed.
  function timedWords(text, words, offset, dur) {
    const shown = text.trim().split(/\s+/).filter(Boolean);
    if (words && words.length === shown.length) {
      return shown.map((w, i) => ({ w, start: offset + words[i].start, end: offset + words[i].end }));
    }
    const first = words && words.length ? words[0].start : 0;
    const last = words && words.length ? words[words.length - 1].end : dur;
    const weights = shown.map((w) => w.length + 2);
    const total = weights.reduce((a, b) => a + b, 0);
    let acc = 0;
    return shown.map((w, i) => {
      const start = offset + first + ((last - first) * acc) / total;
      acc += weights[i];
      return { w, start, end: offset + first + ((last - first) * acc) / total };
    });
  }

  window.buildClipTrack = async function (id) {
    const demo = readDemo(id);
    if (!demo) return null;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      const ctx = new Ctx();
      const buffers = await Promise.all(demo.lines.map(async (line) => {
        const r = await fetch(line.audio.url);
        if (!r.ok) throw new Error(`clip ${line.audio.url}: ${r.status}`);
        return ctx.decodeAudioData(await r.arrayBuffer());
      }));
      const rate = ctx.sampleRate;
      let total = 0;
      const starts = buffers.map((b) => { const s = total; total += b.duration + GAP; return s; });
      const samples = new Float32Array(Math.ceil(total * rate));
      buffers.forEach((b, i) => {
        const at = Math.round(starts[i] * rate);
        for (let c = 0; c < b.numberOfChannels; c += 1) {
          const data = b.getChannelData(c);
          for (let k = 0; k < data.length; k += 1) samples[at + k] += data[k] / b.numberOfChannels;
        }
      });
      ctx.close();
      const lines = demo.lines.map((line, i) => ({
        start: starts[i],
        dur: buffers[i].duration,
        text: line.voice.trim(),
        words: timedWords(line.voice, line.audio.words, starts[i], buffers[i].duration)
      }));
      return { url: wavUrl(samples, rate), lines, total };
    } catch (e) {
      console.warn("Walkthrough: using the original audio.", e);
      return null;
    }
  };
})();
