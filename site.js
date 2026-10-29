const ARTICLES = [
  {
    id: "respond-dispute",
    title: "What happens after you open a bank dispute",
    path: "Help / Bank disputes / After you file",
    topic: "Disputes",
    updated: "May 2026",
    snippet:
      "Your bank asks Northline about one charge. That review stays on that charge even if another payment for the same order is refunded.",
    paragraphs: [
      "A dispute is your bank asking about a charge you already paid. Northline has a short window to reply. You do not send that packet yourself.",
      "If you were also charged twice, the extra payment is a different record. A refund of that extra charge does not close this dispute."
    ],
    steps: [
      "Keep the letter or app notice from your bank.",
      "Note which charge the bank is asking about — the date and the amount.",
      "If you already have a refund of a different charge, keep that receipt.",
      "Wait for the bank’s update. Status shows with your bank, not in a separate Northline inbox."
    ],
    tags: ["dispute", "chargeback", "evidence", "respond", "dashboard", "charged", "twice"]
  },
  {
    id: "evidence-deadline",
    title: "The deadline on your bank dispute",
    path: "Help / Bank disputes / Deadlines",
    topic: "Disputes",
    updated: "April 2026",
    snippet:
      "Your bank usually gives 7 to 21 days to reply. The date on the letter or app notice is the one that counts.",
    paragraphs: [
      "Deadlines depend on the bank and the reason they gave. Treat the date on the notice as final.",
      "Reply with what they asked for. A delivery question needs the receipt. A “charged twice” question needs both dates and amounts."
    ],
    steps: [
      "Read the reason on the notice before you gather files.",
      "Keep the receipt and the bank letter together.",
      "Send the reply before the date on the notice."
    ],
    tags: ["dispute", "evidence", "deadline", "chargeback"]
  },
  {
    id: "payout-hold",
    title: "A refund is taking longer than usual",
    path: "Help / Waiting on money / Delays",
    topic: "Payouts",
    updated: "May 2026",
    snippet:
      "A refund or credit can sit longer than 10 business days if the bank is still posting it, or if we asked you to confirm the order.",
    paragraphs: [
      "A delay does not cancel the refund. The money is still coming back to the same card once the bank posts it.",
      "Search your statement for the original store name and the amount. It will not look like a new deposit from Northline."
    ],
    steps: [
      "Check the refund email for the date and amount.",
      "Search your statement for that amount and the original store name.",
      "If we asked you to confirm the order, follow that link first.",
      "Submit a case if it has been more than 10 business days and the credit is still missing."
    ],
    tags: ["payout", "hold", "verification", "reserve", "balance"]
  },
  {
    id: "failed-payout",
    title: "A refund was sent back",
    path: "Help / Waiting on money / Returned",
    topic: "Payouts",
    updated: "March 2026",
    snippet:
      "A refund can bounce if the card is closed or the bank cannot post the credit. We send it again once we have a working card.",
    paragraphs: [
      "If the credit came back, it is not lost. We try the same card first. If that card is closed, we need another way to return the money.",
      "Do not open a second bank dispute for the same extra charge while we resend the refund."
    ],
    steps: [
      "Check whether the card on the order is still open.",
      "Reply to the refund email if we asked for a different card.",
      "Wait for the new credit before you write the bank again."
    ],
    tags: ["payout", "failed", "returned", "bank", "routing"]
  },
  {
    id: "verify-account",
    title: "Confirm the email and name on the order",
    path: "Help / Your account / Confirm details",
    topic: "Verification",
    updated: "June 2026",
    snippet:
      "We may ask you to confirm the email and name on the order. Blurry photos and mismatched names are the usual reasons a check fails.",
    paragraphs: [
      "We check that the person writing in matches the email and name on the charge. Both need to match what we have on the order.",
      "Use a color photo of the full document if we asked for one. Cropping out the corners or covering the name will fail the check."
    ],
    steps: [
      "Open the link in the request we sent.",
      "Confirm the email and the name on the order.",
      "If we asked for a document, send a clear photo of the full page.",
      "Wait for the status to move from In review to Confirmed."
    ],
    tags: ["verification", "kyc", "identity", "document", "upload"]
  },
  {
    id: "upload-documents",
    title: "Send a document we asked for",
    path: "Help / Your account / Documents",
    topic: "Verification",
    updated: "February 2026",
    snippet:
      "Use the link in the request. A file attached only to a support case is not always added to that review.",
    paragraphs: [
      "Each request has its own upload. Putting the wrong file in the wrong slot restarts that check.",
      "Accepted types are PDF, JPG, and PNG. Password-protected files cannot be opened."
    ],
    steps: [
      "Open the link in the email we sent.",
      "Use the slot named in the request, then submit.",
      "If a file is rejected, read the note before sending a new one."
    ],
    tags: ["upload", "document", "verification", "identity"]
  },
  {
    id: "issue-refund",
    title: "How to request a refund",
    path: "Help / Refunds / Request one",
    topic: "Refunds",
    updated: "May 2026",
    snippet:
      "Ask us to return a charge from the refund request. Card credits typically show in 5 to 10 business days.",
    paragraphs: [
      "A refund goes back to the same card. It shows as a credit under the original store name, not as a new deposit.",
      "Requesting a refund does not close a bank dispute you already opened on that charge or on another charge for the same order."
    ],
    steps: [
      "Open the refund request and name the charge.",
      "Choose a full refund or a partial amount.",
      "Add the order id and what you see on your statement.",
      "Confirm. Watch for the credit on the same card in 5 to 10 business days."
    ],
    tags: ["refund", "payment", "partial", "charge"]
  },
  {
    id: "two-factor",
    title: "Set up two-factor authentication",
    path: "Help / Sign-in / 2FA",
    topic: "Security",
    updated: "January 2026",
    snippet:
      "An authenticator app is the main factor. SMS is a backup only, and it cannot be the only way back in.",
    paragraphs: [
      "Turn on two-factor from Settings → Security. Recovery codes are shown once — store them somewhere other than your email inbox.",
      "If you lose the device, a previously trusted browser can approve a reset, or support can reset it after we confirm the account is yours."
    ],
    steps: [
      "Install an authenticator app before you start.",
      "Scan the QR code and enter the six-digit code.",
      "Download the recovery codes and confirm you stored them.",
      "Sign out and back in to confirm the prompt appears."
    ],
    tags: ["security", "2fa", "authentication", "login"]
  },
  {
    id: "reason-codes",
    title: "What your bank’s reason means",
    path: "Help / Bank disputes / Reasons",
    topic: "Disputes",
    updated: "June 2026",
    snippet:
      "Each reason asks for something different. A delivery question needs the receipt. A “charged twice” question needs both dates and amounts.",
    paragraphs: [
      "The reason is printed on the letter or in your bank’s app. A generic reply that does not answer that reason usually does not help.",
      "If the reason is unfamiliar, reply with the receipt and say which charge — the date and the amount — they are asking about."
    ],
    steps: [
      "Read the reason on the bank notice, not the email subject from the store.",
      "Match what you send to that reason.",
      "Leave out other orders that are not on the notice."
    ],
    tags: ["dispute", "reason", "code", "evidence", "chargeback"]
  },
  {
    id: "dispute-outcome",
    title: "After your bank decides",
    path: "Help / Bank disputes / Outcomes",
    topic: "Disputes",
    updated: "March 2026",
    snippet:
      "If the bank sides with you, that charge comes off your card. If they do not, the charge stays, and a refund of a different charge is separate.",
    paragraphs: [
      "Your bank decides. That can take weeks after you reply. Status shows with your bank, not in a separate Northline inbox.",
      "A win on one charge does not refund a second charge for the same order. Those are still two payments."
    ],
    steps: [
      "Watch the status in your bank’s app.",
      "If you lost and you already have a refund of another charge, keep both receipts.",
      "Do not open a second dispute for a charge that was already refunded."
    ],
    tags: ["dispute", "won", "lost", "fee", "outcome"]
  },
  {
    id: "payout-schedule",
    title: "When a refund usually shows on your card",
    path: "Help / Waiting on money / Timing",
    topic: "Payouts",
    updated: "April 2026",
    snippet:
      "Most refunds show in 5 to 10 business days. Weekends and bank holidays shift the post date, not the refund itself.",
    paragraphs: [
      "A refund can be sent and still not appear today. Your bank decides the exact day it posts.",
      "The credit uses the original store name. It will not look like a new deposit from Northline."
    ],
    steps: [
      "Note the refund date on the email or receipt.",
      "Count 5 to 10 business days from that date.",
      "Search your statement for the original store name and the amount."
    ],
    tags: ["payout", "schedule", "daily", "deposit", "cutoff"]
  },
  {
    id: "update-bank",
    title: "The refund went to a closed card",
    path: "Help / Waiting on money / Closed card",
    topic: "Payouts",
    updated: "May 2026",
    snippet:
      "If the card on the order is closed, the credit often posts to the replacement card. If it comes back, we need another way to return the money.",
    paragraphs: [
      "Banks usually forward a credit to the new card with the same number. That can take longer than a normal refund.",
      "If the credit comes back to us, reply with a working card or another way to receive it. Do not open a second bank dispute for the same extra charge."
    ],
    steps: [
      "Ask your bank if a credit was forwarded to a new card.",
      "Reply to our email if we asked for another card.",
      "Wait for the new credit before you write the bank again."
    ],
    tags: ["payout", "bank", "account", "routing", "verified"]
  },
  {
    id: "verification-rejected",
    title: "We couldn’t confirm your details",
    path: "Help / Your account / Rejected",
    topic: "Verification",
    updated: "June 2026",
    snippet:
      "A rejection names what failed. Send a new file there — resubmitting the same photo will fail again for the same reason.",
    paragraphs: [
      "The note is the reason: blur, cropped corners, a name that doesn’t match, or a document older than 90 days.",
      "A refund can wait until the details match. Approving one document does not finish every check."
    ],
    steps: [
      "Open the link in the request and read the note.",
      "Photograph the full document in even light, with all four corners visible.",
      "Send only that file, then wait for In review to clear."
    ],
    tags: ["verification", "rejected", "document", "hold", "upload"]
  },
  {
    id: "add-owner",
    title: "Someone else’s name is on the order",
    path: "Help / Your account / Name on the order",
    topic: "Verification",
    updated: "January 2026",
    snippet:
      "We check the name and email on the charge. If someone else placed the order, they may need to write in, or you need to show you can speak for them.",
    paragraphs: [
      "The name on the card and the email on the receipt are what we use. A different person writing in needs a match to one of those.",
      "If you paid with someone else’s card, include that in the case and attach the receipt."
    ],
    steps: [
      "Compare the name on the receipt with the name you are writing in.",
      "If they do not match, say how you are connected to the order.",
      "Attach the receipt so we can see the original name."
    ],
    tags: ["verification", "owner", "beneficial", "identity", "business"]
  },
  {
    id: "partial-refund",
    title: "What a partial refund looks like",
    path: "Help / Refunds / Partial refunds",
    topic: "Refunds",
    updated: "April 2026",
    snippet:
      "A partial refund shows as a credit for that amount on your card. It does not change the original charge line to the new total.",
    paragraphs: [
      "You can get more than one partial refund, up to the original amount. The original charge line stays as it was.",
      "The statement name stays the same as the original charge. People sometimes miss the credit because they look for a new store name."
    ],
    steps: [
      "Note the partial amount on the refund email.",
      "Search your statement for that amount and the original store name.",
      "Allow 5 to 10 business days before you write in."
    ],
    tags: ["refund", "partial", "statement", "descriptor", "payment"]
  },
  {
    id: "refund-balance",
    title: "Your refund is still processing",
    path: "Help / Refunds / Processing",
    topic: "Refunds",
    updated: "February 2026",
    snippet:
      "A processing refund has not reached your bank yet. You will not see a credit until that step finishes.",
    paragraphs: [
      "Processing means we have the request and the credit has not posted. This is not the same as a refund that was sent back.",
      "Once the bank has the credit, it cannot be pulled back. Watch your statement for the original store name."
    ],
    steps: [
      "Check the refund email for a Processing or Sent status.",
      "If it says Processing, wait through 5 to 10 business days.",
      "Write in only if it is still missing after that window."
    ],
    tags: ["refund", "balance", "queued", "failed", "payment"]
  },
  {
    id: "lost-device",
    title: "Reset two-factor after a lost device",
    path: "Help / Sign-in / Lost device",
    topic: "Security",
    updated: "March 2026",
    snippet:
      "A previously trusted browser can approve a reset. Otherwise we reset two-factor after we confirm the account is yours.",
    paragraphs: [
      "SMS backup codes cannot replace an authenticator. You will set up a new app at the end of the reset.",
      "A reset signs every session out, including any other device that was signed in."
    ],
    steps: [
      "From a trusted browser, open Settings → Security → Lost device.",
      "Approve the prompt, or start a case if you have no trusted browser left.",
      "Scan a new QR code and store the new recovery codes."
    ],
    tags: ["security", "2fa", "lost", "device", "reset", "authenticator"]
  },
  {
    id: "recovery-codes",
    title: "Recovery codes and trusted browsers",
    path: "Help / Sign-in / Recovery",
    topic: "Security",
    updated: "May 2026",
    snippet:
      "Recovery codes are shown once, when two-factor is turned on. Each code works a single time and then the list needs to be regenerated.",
    paragraphs: [
      "Store the codes outside your email. If the inbox and the phone are both unavailable, the codes are the way back in.",
      "A trusted browser can approve a reset for 30 days after you marked it trusted. Clearing cookies removes that trust."
    ],
    steps: [
      "Open Settings → Security and choose Generate new recovery codes.",
      "This invalidates every older code.",
      "Download the new list before you close the dialog."
    ],
    tags: ["security", "recovery", "codes", "browser", "trusted"]
  },
  {
    id: "inquiry-vs-dispute",
    title: "Your bank asked for information",
    path: "Help / Bank disputes / Inquiries",
    topic: "Disputes",
    updated: "June 2026",
    snippet:
      "An inquiry is your bank asking a question. It does not take the money yet. Answer it — an ignored inquiry often becomes a chargeback.",
    paragraphs: [
      "Your bank is still deciding whether to file a full dispute. The deadline on that letter is the one that counts.",
      "A clear reply with the receipt is usually enough. If you were also charged twice, say which line the bank is asking about."
    ],
    steps: [
      "Read what the bank asked.",
      "Reply with the receipt and the date of the charge.",
      "Send it before the date on the inquiry."
    ],
    tags: ["dispute", "inquiry", "chargeback", "retrieval"]
  },
  {
    id: "duplicate-charge",
    title: "Duplicate charges",
    path: "Help / Charges / Duplicates",
    topic: "Disputes",
    updated: "April 2026",
    snippet:
      "Two lines on your statement are not always two payments. This page explains when you were actually charged twice, and what a refund changes.",
    paragraphs: [
      "A payment that failed and was tried again can look like two charges. Only successful payments count.",
      "A refund returns the extra payment. It does not close a dispute you already opened with your bank on the other charge."
    ],
    steps: [
      "Check whether both charges say they went through.",
      "Look for a refund of the extra charge on your statement.",
      "If you also contacted your bank, that review is separate from the refund."
    ],
    tags: ["dispute", "duplicate", "charge", "charged", "twice", "refund"]
  },
  {
    id: "dispute-fee",
    title: "Fees when you open a bank dispute",
    path: "Help / Bank disputes / Fees",
    topic: "Disputes",
    updated: "January 2026",
    snippet:
      "Your bank may charge a fee when you open a dispute. That fee is between you and the bank. A refund from us does not cancel it.",
    paragraphs: [
      "The bank posts that fee on their side. We cannot reverse a bank fee from here.",
      "A refund of the extra charge is separate from any fee your bank added."
    ],
    steps: [
      "Check your bank’s app for a dispute fee line.",
      "Ask the bank about that fee if you want it reversed.",
      "Do not open a Northline case only to ask for the bank fee back."
    ],
    tags: ["dispute", "fee", "balance", "chargeback"]
  },
  {
    id: "instant-payout",
    title: "Can I get the refund faster?",
    path: "Help / Waiting on money / Faster",
    topic: "Payouts",
    updated: "May 2026",
    snippet:
      "We cannot make your bank post a credit today. Once we send it, the card usually shows it in 5 to 10 business days.",
    paragraphs: [
      "A case or a second request does not move the bank faster. The post date is theirs.",
      "If the card is closed, ask the bank whether they forwarded the credit. That can add a few days."
    ],
    steps: [
      "Confirm we already sent the refund.",
      "Count 5 to 10 business days from that date.",
      "Write in only if the window has passed and the credit is still missing."
    ],
    tags: ["payout", "instant", "debit", "limit", "fee"]
  },
  {
    id: "negative-balance",
    title: "A refund posted, then the charge came back",
    path: "Help / Waiting on money / Charge came back",
    topic: "Payouts",
    updated: "March 2026",
    snippet:
      "A credit can post and then reverse if the bank dispute and the refund both try to return the same charge.",
    paragraphs: [
      "If you already opened a bank dispute on a charge and we also refunded that same charge, the bank may put the money back once.",
      "An extra charge on the same order is a different payment. A refund of that extra line should still stand."
    ],
    steps: [
      "Compare the dates and amounts on both lines.",
      "See which charge the bank is still reviewing.",
      "Submit a case if the extra charge came back after we refunded it."
    ],
    tags: ["payout", "balance", "negative", "reserve"]
  },
  {
    id: "payout-statement",
    title: "Find a refund on your statement",
    path: "Help / Waiting on money / Statements",
    topic: "Payouts",
    updated: "February 2026",
    snippet:
      "The credit uses the original store name. The bank date can be a few days after the refund date in the email.",
    paragraphs: [
      "Search for the amount and the original store name. It will not look like a new deposit from Northline.",
      "A returned credit disappears from the statement. We send it again once we have a working card."
    ],
    steps: [
      "Copy the amount from the refund email.",
      "Search your statement for that amount and the store name.",
      "Allow 5 to 10 business days from the refund date."
    ],
    tags: ["payout", "statement", "deposit", "bank", "report"]
  },
  {
    id: "proof-of-address",
    title: "What counts as proof of address",
    path: "Help / Your account / Address",
    topic: "Verification",
    updated: "April 2026",
    snippet:
      "Use a bank statement or utility bill dated within 90 days. The name and address must match, and the full page has to be visible.",
    paragraphs: [
      "Screenshots of a maps app, lease excerpts, and mail forwarding slips are rejected.",
      "The name on the document should match the name we asked you to confirm."
    ],
    steps: [
      "Download the PDF from the bank or utility. Do not photograph a screen.",
      "Check the date and that all four corners are in the file.",
      "Upload it in the address slot, not the identity slot."
    ],
    tags: ["verification", "address", "document", "utility", "statement"]
  },
  {
    id: "dba-name",
    title: "The store name on my statement looks wrong",
    path: "Help / Your account / Store name",
    topic: "Verification",
    updated: "June 2026",
    snippet:
      "The name on your card can be a store name, not the company name. Search for the amount if the name looks unfamiliar.",
    paragraphs: [
      "A refund uses the same name as the original charge. If you look for “Northline,” you may miss it.",
      "If the name does not match any store you used, submit a case with the date and the amount."
    ],
    steps: [
      "Search your statement for the amount, not only the store name.",
      "Compare it with the receipt or order email.",
      "Submit a case if you still do not recognize the charge."
    ],
    tags: ["verification", "name", "dba", "business", "statement"]
  },
  {
    id: "verification-pending",
    title: "We’re still reviewing what you sent",
    path: "Help / Your account / In review",
    topic: "Verification",
    updated: "May 2026",
    snippet:
      "Most reviews finish within two business days. A case does not speed up a review that is still inside that window.",
    paragraphs: [
      "Status stays In review while a person checks the files. Refreshing the page does not move it.",
      "If it is still In review after two business days, open a case and include what we asked for, not a new copy of the file."
    ],
    steps: [
      "Check the timestamp on the request.",
      "Wait through two business days before writing in.",
      "If you were rejected, follow the note instead of waiting."
    ],
    tags: ["verification", "review", "pending", "status"]
  },
  {
    id: "refund-window",
    title: "How long we can still refund a charge",
    path: "Help / Refunds / Refund window",
    topic: "Refunds",
    updated: "March 2026",
    snippet:
      "Card payments can be refunded for 180 days. After that we cannot send the credit to the same charge.",
    paragraphs: [
      "The window starts on the original charge date, not the day the order arrived.",
      "A partial refund does not restart the 180 days."
    ],
    steps: [
      "Check the charge date on your statement or receipt.",
      "If it is older than 180 days, say so in the case.",
      "Do not open a bank dispute only because the refund window closed — tell us first if you can."
    ],
    tags: ["refund", "window", "180", "payment"]
  },
  {
    id: "refund-not-received",
    title: "I cannot find the refund",
    path: "Help / Refunds / Missing refund",
    topic: "Refunds",
    updated: "January 2026",
    snippet:
      "A submitted refund can take 5 to 10 business days to show on your card. It uses the original statement name, not a new one.",
    paragraphs: [
      "Search your statement for the original store name and the refund amount. It will not look like a new deposit.",
      "If we still show the refund as Pending, it has not reached your bank yet."
    ],
    steps: [
      "Check the email or receipt for the refund date and amount.",
      "Search your statement for that amount and the original store name.",
      "Submit a case only if the refund is older than 10 business days and still missing."
    ],
    tags: ["refund", "customer", "statement", "missing", "descriptor"]
  },
  {
    id: "refund-and-dispute",
    title: "A refund when you already opened a bank dispute",
    path: "Help / Refunds / Refund and a dispute",
    topic: "Refunds",
    updated: "June 2026",
    snippet:
      "A refund of the extra charge does not close a dispute you already opened with your bank on the other charge. Those are two different reviews.",
    paragraphs: [
      "Your bank is asking about one charge. A refund of a different charge does not answer that question.",
      "You can still request the extra-charge refund. The bank dispute stays open until the bank finishes."
    ],
    steps: [
      "Request a refund of only the extra charge.",
      "Keep the refund confirmation.",
      "Let the bank finish the dispute on the other charge."
    ],
    tags: ["refund", "dispute", "evidence", "receipt", "charged", "twice"]
  },
  {
    id: "staff-roles",
    title: "Who can change my account",
    path: "Help / Sign-in / Access",
    topic: "Security",
    updated: "April 2026",
    snippet:
      "Only you can request a refund or reset two-factor from this help center. We will not change the account from a different email.",
    paragraphs: [
      "Write in from the email on the order. A different address needs a match to the receipt.",
      "Signing out of every device does not delete your orders."
    ],
    steps: [
      "Use the email on the receipt.",
      "If someone else needs to write in, include the order id and the receipt.",
      "Do not share your sign-in code."
    ],
    tags: ["security", "role", "admin", "team", "refund"]
  },
  {
    id: "suspicious-login",
    title: "You got a sign-in alert you do not recognize",
    path: "Help / Sign-in / Alerts",
    topic: "Security",
    updated: "February 2026",
    snippet:
      "The alert email names the browser and the city. If that was not you, sign out of every session and rotate the password.",
    paragraphs: [
      "A new city can be a VPN or a phone on a different network. Check the time before you reset everything.",
      "If a charge you do not recognize posted, open a case with the date and amount after you secure the login."
    ],
    steps: [
      "From a device you trust, open Settings → Security → Sessions.",
      "Sign out of the session you do not recognize.",
      "Change the password and confirm two-factor is still on."
    ],
    tags: ["security", "login", "alert", "session", "password"]
  },
  {
    id: "sign-out-everywhere",
    title: "Sign out of every device",
    path: "Help / Sign-in / Sessions",
    topic: "Security",
    updated: "May 2026",
    snippet:
      "Sign out of all sessions from Settings → Security. You stay signed in on the browser you used to click it.",
    paragraphs: [
      "This does not turn off two-factor or change the password.",
      "Other devices signed in with your email will need to sign in again."
    ],
    steps: [
      "Open Settings → Security → Sessions.",
      "Choose Sign out of all other sessions.",
      "Confirm you can still get in on this browser before you close it."
    ],
    tags: ["security", "session", "sign out", "device"]
  }
];

const SUGGESTIONS = [
  { q: "I was charged twice", hint: "Order 1044" },
  { q: "refund not showing", hint: "5 to 10 days" },
  { q: "I opened a bank dispute", hint: "Bank disputes" },
  { q: "refund a payment", hint: "Refunds" },
  { q: "I lost my phone", hint: "Sign-in" }
];

const TOPICS = ["All", "Disputes", "Payouts", "Verification", "Refunds", "Security"];

const TOPIC_LABELS = {
  All: "All",
  Disputes: "Bank disputes",
  Payouts: "Waiting on money",
  Verification: "Your account",
  Refunds: "Refunds",
  Security: "Sign-in"
};

function topicLabel(topic) {
  return TOPIC_LABELS[topic] || topic;
}

function topicKeyFromLabel(name) {
  if (!name) return "";
  const exact = Object.entries(TOPIC_LABELS).find(([, label]) => label === name);
  if (exact && exact[0] !== "All") return exact[0];
  const starts = Object.entries(TOPIC_LABELS).find(([, label]) => name.startsWith(label));
  if (starts && starts[0] !== "All") return starts[0];
  if (["Disputes", "Payouts", "Verification", "Refunds", "Security"].includes(name)) return name;
  return "";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

function escapeReg(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text, query) {
  const safe = escapeHtml(text);
  const words = query.trim().split(/\s+/).filter((word) => word.length > 1);
  if (!words.length) return safe;
  const re = new RegExp(`\\b(${words.map(escapeReg).join("|")})\\b`, "ig");
  return safe.replace(re, "<mark>$1</mark>");
}

const STOP_WORDS = new Set([
  "a", "an", "the", "to", "do", "i", "me", "my", "how", "what", "where", "when",
  "why", "long", "have", "need", "this", "is", "of", "for", "and", "or", "in", "on"
]);

function searchArticles(query, topic) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.replace(/[^a-z0-9]+/g, ""))
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
  return ARTICLES.filter((article) => {
    if (topic && topic !== "All" && article.topic !== topic) return false;
    if (!terms.length) return true;
    const haystack = [article.title, article.snippet, article.topic, article.tags.join(" ")]
      .join(" ")
      .toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

const TOPIC_SUMMARIES = {
  Disputes:
    "A bank dispute is your bank asking about <mark>one charge</mark>. That review stays on that charge even if another payment is refunded.",
  Payouts:
    "A refund or credit can take <mark>5 to 10 business days</mark> to show. Search your statement for the original store name and the amount.",
  Verification:
    "We may ask you to confirm the <mark>email and name on the order</mark>. A file sent only in a case is not always enough — follow the link in the request.",
  Refunds:
    "Refunds usually show on your card in <mark>5 to 10 business days</mark>. A refund does not close a dispute you already opened with your bank.",
  Security:
    "If you lost the phone you use to sign in, a reset needs <mark>a recovery code or a previously trusted browser</mark>."
};

function summaryFor(query, topic, results) {
  const active = topic && topic !== "All" ? topic : "";
  const q = query.toLowerCase();
  if (!results.length) {
    const scope = active ? ` in ${topicLabel(active)}` : "";
    return `Nothing${scope} matches that wording. Try a shorter phrase, or pick another topic. You can also submit a case and a specialist will pick it up.`;
  }
  if (active && TOPIC_SUMMARIES[active]) {
    const count = `${results.length} ${escapeHtml(topicLabel(active))} article${results.length === 1 ? "" : "s"}`;
    if (query.trim()) {
      return `${TOPIC_SUMMARIES[active]} These <mark>${count}</mark> match “${escapeHtml(query.trim())}”.`;
    }
    return `${TOPIC_SUMMARIES[active]} Showing <mark>${count}</mark>.`;
  }
  if (/twice|charged twice|duplicate/.test(q)) {
    return "From these articles: two lines are two payments only if <mark>both posted</mark> for the same order and amount. A pending or failed retry is not money you paid. A refund of the extra charge takes <mark>5 to 10 business days</mark> and does <mark>not close</mark> a bank dispute on the other charge.";
  }
  if (/hold|payout|reserve/.test(q)) return TOPIC_SUMMARIES.Payouts;
  if (/verif|document|upload|identity|kyc/.test(q)) return TOPIC_SUMMARIES.Verification;
  if (/refund/.test(q)) return TOPIC_SUMMARIES.Refunds;
  if (/dispute|chargeback|evidence/.test(q)) return TOPIC_SUMMARIES.Disputes;
  if (/2fa|authenticator|security|recovery|login/.test(q)) return TOPIC_SUMMARIES.Security;
  const top = results[0];
  return `The closest match is <mark>${escapeHtml(top.title)}</mark>. ${escapeHtml(top.snippet)}`;
}

function searchUrl(query, topic) {
  const params = new URLSearchParams();
  if (query && query.trim()) params.set("q", query.trim());
  if (topic && topic !== "All") params.set("topic", topic);
  const qs = params.toString();
  return `search.html${qs ? `?${qs}` : ""}`;
}

function goToSearch(query, topic) {
  if (query && query.trim()) sessionStorage.setItem("nl-last-q", query.trim());
  window.location.href = searchUrl(query, topic);
}

function lastSearchQuery() {
  const params = new URLSearchParams(window.location.search).get("q");
  if (params && params.trim()) return params.trim();
  return sessionStorage.getItem("nl-last-q") || "";
}

function articleContentParts(article) {
  if (article.id === "duplicate-charge") {
    return [
      plain("Two lines are two payments only if "),
      marked("both posted"),
      plain(" for the same order and amount. A pending authorization or a failed retry is not a second charge. Refunding the extra line takes "),
      marked("5 to 10 business days"),
      plain(" and does not close a dispute your bank already opened.")
    ];
  }
  if (article.id === "refund-and-dispute") {
    return [
      plain("A refund of the extra charge and a bank dispute are "),
      marked("two different reviews"),
      plain(". The extra $86 can come back while the bank still finishes the charge you already disputed.")
    ];
  }
  if (article.id === "refund-not-received") {
    return [
      plain("A submitted refund uses the "),
      marked("original store name"),
      plain(" and usually shows in "),
      marked("5 to 10 business days"),
      plain(". It will not look like a new deposit from Northline.")
    ];
  }
  if (article.id === "respond-dispute" || article.id === "inquiry-vs-dispute") {
    return [
      plain("Your bank is asking about "),
      marked("one charge"),
      plain(". That review stays on that charge even if another payment for the same order is refunded.")
    ];
  }
  const lead = article.paragraphs[0] || article.snippet;
  return [plain(lead)];
}

function resultsContentParts(query, results) {
  const q = (query || "").toLowerCase();
  if (!results.length) {
    return [plain("Nothing on this list matches that wording. Try a shorter phrase, or "), marked("submit a case"), plain(".")];
  }
  if (/twice|duplicate|charged/.test(q)) {
    return [
      plain("From these articles: two lines are two payments only if "),
      marked("both posted"),
      plain(" for the same order and amount. A pending or failed retry is not money you paid. A refund of the extra charge takes "),
      marked("5 to 10 business days"),
      plain(" and does "),
      marked("not close"),
      plain(" a bank dispute on the other charge.")
    ];
  }
  if (/refund|missing|not showing|isn.t here/.test(q)) {
    return [
      plain("From these articles: a refund uses the "),
      marked("original store name"),
      plain(" and usually posts in "),
      marked("5 to 10 business days"),
      plain(". It will not look like a new deposit. A bank dispute on a different charge stays open.")
    ];
  }
  if (/dispute|bank|chargeback|inquiry/.test(q)) {
    return [
      plain("From these articles: a bank dispute is your bank asking about "),
      marked("one charge"),
      plain(". That review stays on that charge even if another payment is refunded. The date on the letter is the one that counts.")
    ];
  }
  if (results.length === 1) return articleContentParts(results[0]);
  const first = results[0].paragraphs[0] || results[0].snippet;
  const second = results[1].paragraphs[0] || results[1].snippet;
  return [plain("From what’s on this list: "), plain(first), plain(" "), plain(second)];
}

function initSearchForms() {
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    const input = form.querySelector("input[name='q']");
    const suggest = form.querySelector("[data-suggest]");
    if (!input) return;

    const open = () => form.classList.add("is-open");
    const close = () => form.classList.remove("is-open");

    input.addEventListener("focus", open);
    input.addEventListener("input", open);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
        input.blur();
      }
    });

    form.addEventListener("focusout", (event) => {
      if (!form.contains(event.relatedTarget)) close();
    });

    if (suggest) {
      suggest.innerHTML = SUGGESTIONS.map(
        (item) =>
          `<button type="button" data-q="${escapeHtml(item.q)}">${escapeHtml(item.q)}<span>${escapeHtml(item.hint)}</span></button>`
      ).join("");
      suggest.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-q]");
        if (!button) return;
        input.value = button.dataset.q;
        goToSearch(input.value);
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      goToSearch(input.value);
    });
  });

  document.querySelectorAll("[data-query]").forEach((node) => {
    node.addEventListener("click", () => goToSearch(node.dataset.query, node.dataset.topic));
  });
}

function renderArticle(article, backHref) {
  const view = document.getElementById("article-view");
  const list = document.getElementById("results-view");
  if (!view || !list) return;
  list.hidden = true;
  view.hidden = false;
  document.title = `${article.title} — Northline Help`;

  view.innerHTML = `
    <article class="article">
      <a class="back-link" href="${escapeHtml(backHref)}">← Back to results</a>
      <p class="article-kicker">${escapeHtml(article.path)} · Updated ${escapeHtml(article.updated)}</p>
      <h1>${escapeHtml(article.title)}</h1>
      <div class="article-body">
        ${article.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
        <ol class="article-steps">
          ${article.steps
            .map((step, index) => `<li><span class="step-num">${index + 1}</span><span>${escapeHtml(step)}</span></li>`)
            .join("")}
        </ol>
        <p>Still stuck after these steps? <a href="submit.html" style="color: var(--brand-navy-deep); font-weight: 600;">Submit a case</a> and include the payment or dispute id.</p>
      </div>
    </article>
  `;
}

function renderResults(query, topic) {
  const title = document.getElementById("results-title");
  const meta = document.getElementById("results-meta");
  const aiText = document.getElementById("ai-text");
  const aiMeta = document.getElementById("ai-meta");
  const list = document.getElementById("result-list");
  const filters = document.getElementById("topic-filters");
  if (!list) return;

  const results = searchArticles(query, topic);
  const shownQuery = query || "all articles";
  if (title) {
    title.textContent = query ? `Results for “${query}”` : "Browse help articles";
  }
  if (meta) {
    const topicNote = topic && topic !== "All" ? ` in ${topicLabel(topic)}` : "";
    meta.textContent = `${results.length} article${results.length === 1 ? "" : "s"}${topicNote} for ${shownQuery}`;
  }
  if (aiText) aiText.innerHTML = summaryFor(query, topic, results);
  if (aiMeta) {
    const scope = topic && topic !== "All" ? `${topicLabel(topic)} ` : "";
    aiMeta.textContent = results.length
      ? `Based on ${results.length} ${scope}article${results.length === 1 ? "" : "s"} · Updated 2026`
      : "No matching articles";
  }
  if (typeof window.__summarizeSearch === "function") {
    window.__summarizeSearch(query, topic, results);
  }

  if (filters) {
    filters.innerHTML = TOPICS.map((name) => {
      const pressed = (topic || "All") === name;
      return `<button type="button" class="chip-subtle" aria-pressed="${pressed}" data-topic-filter="${escapeHtml(name)}">${escapeHtml(topicLabel(name))}</button>`;
    }).join("");
    filters.querySelectorAll("[data-topic-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = button.dataset.topicFilter;
        if ((topic || "All") === next) return;
        const url = searchUrl(query, next);
        history.pushState({ q: query, topic: next }, "", url);
        renderResults(query, next);
      });
    });
  }

  if (!results.length) {
    list.innerHTML = `
      <div class="empty">
        <h2>No articles for that search</h2>
        <p>Try “charged twice”, “refund”, or “bank dispute”, or send the details to support.</p>
        <a class="btn-primary" href="submit.html">Submit a case</a>
      </div>`;
    return;
  }

  list.innerHTML = results
    .map((article) => {
      const href = `article.html?id=${encodeURIComponent(article.id)}`;
      return `
        <a class="result" data-id="${escapeHtml(article.id)}" href="${href}">
          <p class="result__path">${escapeHtml(article.path)}</p>
          <h2 class="result__title">${escapeHtml(article.title)}</h2>
          <p class="result__snip">${highlight(article.snippet, query)}</p>
        </a>`;
    })
    .join("");
}

function initSearchPage() {
  if (!document.body.dataset.page || document.body.dataset.page !== "search") return;
  mountSearchSummary();
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";
  const topic = params.get("topic") || "All";
  const articleId = params.get("a");
  const input = document.querySelector("[data-search-form] input[name='q']");
  if (input) input.value = query;
  const searchBtn = document.getElementById("results-search-btn");
  const searchForm = document.getElementById("results-search");
  const setSearchOpen = (open) => {
    if (!searchForm || !searchBtn) return;
    searchForm.hidden = !open;
    searchBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) input?.focus();
  };
  searchBtn?.addEventListener("click", () => setSearchOpen(searchForm.hidden));
  searchForm?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setSearchOpen(false);
  });

  const follow = document.getElementById("followup");
  if (follow) {
    follow.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = follow.querySelector("input").value;
      if (value.trim()) goToSearch(value);
    });
  }
  document.querySelectorAll("[data-followup]").forEach((chip) => {
    chip.addEventListener("click", () => goToSearch(chip.dataset.followup));
  });

  const helpful = document.getElementById("helpful-note");
  document.querySelectorAll("[data-helpful]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-helpful]").forEach((other) => other.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      if (helpful) helpful.textContent = "Thanks — we logged that.";
    });
  });

  window.addEventListener("popstate", () => {
    const next = new URLSearchParams(window.location.search);
    const nextQuery = next.get("q") || "";
    const nextTopic = next.get("topic") || "All";
    if (input) input.value = nextQuery;
    const articleView = document.getElementById("article-view");
    const resultsView = document.getElementById("results-view");
    if (next.get("a")) return;
    if (articleView) articleView.hidden = true;
    if (resultsView) resultsView.hidden = false;
    document.title = "Search results — Northline Help";
    renderResults(nextQuery, nextTopic);
  });

  if (articleId) {
    const article = ARTICLES.find((item) => item.id === articleId);
    const backParams = new URLSearchParams();
    if (query) backParams.set("q", query);
    if (topic && topic !== "All") backParams.set("topic", topic);
    const backQuery = backParams.toString();
    const back = backQuery ? `search.html?${backQuery}` : "search.html";
    if (article) {
      renderArticle(article, back);
      if (typeof window.__summarizeArticle === "function") window.__summarizeArticle(article);
      const resultsView = document.getElementById("results-view");
      if (resultsView) resultsView.hidden = true;
      return;
    }
  }

  renderResults(query, topic);
}

function initHome() {
  const list = document.getElementById("popular-list");
  if (!list) return;
  const popular = ["duplicate-charge", "refund-and-dispute", "refund-not-received", "inquiry-vs-dispute"];
  list.innerHTML = popular
    .map((id) => ARTICLES.find((article) => article.id === id))
    .filter(Boolean)
    .map(
      (article) => `
      <a class="result" href="article.html?id=${encodeURIComponent(article.id)}">
        <p class="result__path">${escapeHtml(article.path)}</p>
        <h3 class="result__title">${escapeHtml(article.title)}</h3>
        <p class="result__snip">${escapeHtml(article.snippet)}</p>
      </a>`
    )
    .join("");
}

const TOPIC_CITES = {
  Disputes: ["respond-dispute", "inquiry-vs-dispute"],
  Payouts: ["refund-not-received", "payout-hold"],
  Verification: ["verify-account", "upload-documents"],
  Refunds: ["issue-refund", "refund-and-dispute"],
  Security: ["lost-device", "recovery-codes"]
};

const ACTION_CITES = {
  review: ["refund-not-received", "payout-statement"],
  remind: ["respond-dispute", "inquiry-vs-dispute"],
  refund: ["duplicate-charge", "refund-and-dispute"],
  reset: ["lost-device", "recovery-codes"]
};

function plain(value) {
  return { t: String(value), mark: false };
}

function defaultCites() {
  const page = document.body.dataset.page;
  if (page === "search") {
    const params = new URLSearchParams(window.location.search);
    const query = document.querySelector("[data-search-form] input[name='q']")?.value || params.get("q") || "";
    const topic = params.get("topic") || "All";
    return searchArticles(query, topic).slice(0, 2).map((article) => article.id);
  }
  if (page === "action") {
    const action = document.querySelector("#action-form [name='action']")?.value || "";
    return ACTION_CITES[action] || ["payout-hold", "respond-dispute"];
  }
  if (page === "submit") {
    const topic = document.querySelector("#case-form [name='topic']")?.value || "";
    return TOPIC_CITES[topic] || ["respond-dispute", "payout-hold"];
  }
  return [];
}

function citesForSummary(parts) {
  const page = document.body.dataset.page;
  if (page === "article") return window.__kaCites ? window.__kaCites(parts) : [];
  if (page !== "search" && page !== "action" && page !== "submit") return [];
  const text = parts.map((part) => part.t || "").join(" ").toLowerCase();
  const named = ARTICLES.filter((article) => text.includes(article.title.toLowerCase())).map((article) => article.id);
  return [...new Set(named.length ? named : defaultCites())].slice(0, 2);
}

function renderCites(textEl, ids) {
  if (!ids.length) return;
  const row = document.createElement("span");
  row.className = "cite-row";
  ids.forEach((id, index) => {
    const article = ARTICLES.find((item) => item.id === id);
    if (!article) return;
    const link = document.createElement("a");
    link.className = "cite";
    link.href = `article.html?id=${encodeURIComponent(article.id)}`;
    link.dataset.cite = article.id;
    link.textContent = String(index + 1);
    link.setAttribute("aria-label", `Source ${index + 1}: ${article.title}`);
    row.appendChild(link);
  });
  if (row.childElementCount) textEl.appendChild(row);
}

function mountCitePreview() {
  if (document.querySelector(".cite-preview")) return;
  const preview = document.createElement("a");
  preview.className = "cite-preview";
  preview.hidden = true;
  preview.innerHTML = `
    <p class="cite-preview__path" data-cite-path></p>
    <strong data-cite-title></strong>
    <p data-cite-snippet></p>
    <span class="cite-preview__open">Open article</span>`;
  document.body.appendChild(preview);
  let current = null;

  function hide() {
    current = null;
    preview.hidden = true;
  }

  function show(link) {
    const article = ARTICLES.find((item) => item.id === link.dataset.cite);
    if (!article) return;
    current = link;
    preview.href = link.href;
    preview.querySelector("[data-cite-path]").textContent = article.path;
    preview.querySelector("[data-cite-title]").textContent = article.title;
    preview.querySelector("[data-cite-snippet]").textContent = article.snippet;
    preview.hidden = false;
    const rect = link.getBoundingClientRect();
    const width = preview.offsetWidth;
    const height = preview.offsetHeight;
    let left = rect.left + rect.width / 2 - width / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - width - 12));
    let top = rect.top - height - 10;
    if (top < 8) top = rect.bottom + 10;
    preview.style.left = `${left}px`;
    preview.style.top = `${top}px`;
  }

  document.addEventListener("pointerover", (event) => {
    const link = event.target.closest?.(".cite");
    if (link) {
      show(link);
      return;
    }
  });
  document.addEventListener("pointerout", (event) => {
    const from = event.target.closest?.(".cite") || event.target.closest?.(".cite-preview");
    if (!from) return;
    const next = event.relatedTarget;
    if (next?.closest?.(".cite-preview") || next?.closest?.(".cite")) return;
    hide();
  });
  document.addEventListener("focusin", (event) => {
    const link = event.target.closest?.(".cite");
    if (link) show(link);
  });
  document.addEventListener("focusout", (event) => {
    if (event.target.closest?.(".cite") && current === event.target.closest(".cite")) hide();
  });
  document.querySelector(".browser-viewport")?.addEventListener("scroll", hide, { passive: true });
}

function marked(value) {
  return { t: String(value), mark: true };
}

function clipText(value, max) {
  const clean = String(value).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const word = cut.replace(/\s+\S*$/, "");
  return `${word || cut}…`;
}

function topicLead(topic) {
  switch (topic) {
    case "Disputes":
      return [
        plain("A bank dispute is your bank asking about "),
        marked("one charge"),
        plain(". That review stays on that charge even if another payment is refunded.")
      ];
    case "Payouts":
      return [
        plain("A refund or credit can take "),
        marked("5 to 10 business days"),
        plain(". Search your statement for the original store name and the amount.")
      ];
    case "Verification":
      return [
        plain("We may ask you to confirm the "),
        marked("email and name on the order"),
        plain(". Follow the link in the request if we asked for a document.")
      ];
    case "Refunds":
      return [
        plain("Refunds usually show on your card in "),
        marked("5 to 10 business days"),
        plain(". A refund does not close a dispute you already opened with your bank.")
      ];
    case "Security":
      return [
        plain("If you lost the phone you use to sign in, a reset needs "),
        marked("a recovery code or a previously trusted browser"),
        plain(".")
      ];
    default:
      return [
        plain("Describe what you expected and what happened instead. An "),
        marked("order or payment id"),
        plain(" is the fastest way to find the charge.")
      ];
  }
}

function keyAsk(topic) {
  switch (topic) {
    case "Disputes":
      return [plain("Say which charge your bank is asking about — "), marked("the date and the amount"), plain(".")];
    case "Payouts":
      return [plain("Say the "), marked("amount and the date"), plain(" you expected the credit, and what your statement shows now.")];
    case "Verification":
      return [plain("Say what we asked you to confirm — "), marked("the email, the name, or a document"), plain(".")];
    case "Refunds":
      return [plain("Include the "), marked("order or payment id"), plain(" and whether you also opened a bank dispute.")];
    case "Security":
      return [plain("Say if you still have "), marked("the recovery codes or a trusted browser"), plain(".")];
    default:
      return [plain("Add the "), marked("topic and an order id"), plain(" if you have one.")];
  }
}

function landingParts(topic) {
  if (topic) return topicLead(topic);
  return [
    plain("Most cases move faster when you name "),
    marked("what you expected, what you saw, and what you already tried"),
    plain(". An "),
    marked("order or payment id"),
    plain(" lets us find the charge without another email.")
  ];
}

function extras(draft, parts) {
  if (draft.priority === "Urgent") {
    parts.push(plain(" You marked it "), marked("urgent"), plain(", so name the charge and the date it posted."));
  }
  if (draft.reference.trim()) {
    parts.push(plain(" I’ll attach "), marked(draft.reference.trim()), plain(" to the case."));
  }
  return parts;
}

function scriptForDraft(draft) {
  const details = draft.details.trim();
  const subject = draft.subject.trim();
  let parts;
  if (details.length > 8) {
    parts = [plain("You wrote: “"), marked(clipText(details, 110)), plain("”. ")];
    const gate = actionGate(draft);
    if (gate) {
      parts.push(plain("You can do this yourself from here: "), marked(gate.name), plain(". "));
    }
    parts.push(...keyAsk(draft.topic));
  } else if (subject) {
    parts = [plain("Subject so far: “"), marked(clipText(subject, 80)), plain("”. "), ...(draft.topic ? topicLead(draft.topic) : [plain("Pick a topic so this points at the right record.")])];
  } else if (draft.topic) {
    parts = topicLead(draft.topic);
  } else {
    parts = landingParts("");
  }
  return extras(draft, parts);
}

const CASE_HANDOFF_KEY = "nl-case-handoff";

function paymentIdFrom(draft) {
  const blob = `${draft.details} ${draft.subject} ${draft.reference}`;
  const found = blob.match(/py_[a-z0-9]+/i) || blob.match(/\b\d{3,}\b/);
  return found ? found[0] : draft.reference.trim();
}

function saveCaseHandoff(draft, gate) {
  const note = [draft.subject.trim(), draft.details.trim()].filter(Boolean).join("\n\n");
  sessionStorage.setItem(CASE_HANDOFF_KEY, JSON.stringify({
    action: gate.id === "refund-action" ? "refund" : "",
    email: draft.email.trim(),
    reference: paymentIdFrom(draft),
    note
  }));
}

function readCaseHandoff() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(CASE_HANDOFF_KEY) || "null");
    return saved && typeof saved === "object" ? saved : null;
  } catch {
    return null;
  }
}

function actionGate(draft) {
  const text = `${draft.subject} ${draft.details}`.toLowerCase();
  if (/refund|extra charge|charged twice|duplicate/.test(text)) {
    return { id: "refund-action", name: "Request a refund", label: "Request the refund", href: "action.html" };
  }
  return null;
}

function questionPool(draft) {
  const subjectBit = draft.subject.trim() ? ` for “${clipText(draft.subject, 48)}”` : "";
  const pool = [];
  if (!draft.topic) {
    pool.push({
      id: "which-topic",
      label: "Which topic should I pick?",
      parts: () => [
        plain("Pick the area that matches what happened. "),
        marked("Bank disputes"),
        plain(" if you asked your bank to review a charge, "),
        marked("Waiting on money"),
        plain(" if a refund has not shown up, "),
        marked("Refunds"),
        plain(" if you want a charge sent back.")
      ]
    });
  }
  if (draft.topic === "Disputes") {
    pool.push({
      id: "evidence",
      label: "What should I send my bank?",
      parts: () => [
        plain(`For a bank dispute${subjectBit}, the date on the `),
        marked("letter or app notice"),
        plain(" is the one that counts. Keep the receipt and say which charge — "),
        marked("the date and the amount"),
        plain(" — the bank is asking about.")
      ]
    });
  }
  if (draft.topic === "Payouts") {
    pool.push({
      id: "hold-or-return",
      label: "When should I see the money?",
      parts: () => [
        plain("A refund or credit usually shows in "),
        marked("5 to 10 business days"),
        plain(". Search your statement for the original store name and the amount, not a new deposit.")
      ]
    });
  }
  if (draft.topic === "Verification") {
    pool.push({
      id: "where-upload",
      label: "Where do I send the document?",
      parts: () => [
        plain("Use the "),
        marked("link in the request"),
        plain(" we sent. A file attached only to this case is not always added to that review. Use a "),
        marked("PDF, JPG, or PNG"),
        plain(".")
      ]
    });
  }
  if (draft.topic === "Refunds") {
    pool.push({
      id: "refund-dispute",
      label: "Does a refund close my bank dispute?",
      parts: () => [
        plain("No. You can still request the extra-charge refund. The bank dispute "),
        marked("stays open"),
        plain(" until your bank finishes that review.")
      ]
    });
  }
  if (draft.topic === "Security") {
    pool.push({
      id: "lost-device",
      label: "What if I lost my authenticator?",
      parts: () => [
        plain("A reset works from a "),
        marked("previously trusted browser"),
        plain(". Otherwise we reset it after we confirm the account is yours. Mention whether you still have the recovery codes.")
      ]
    });
  }
  if (draft.details.trim().length < 40) {
    pool.push({
      id: "how-much",
      label: "How much detail is enough?",
      parts: () => [
        plain("One short paragraph is enough: what you expected, what you saw, and what you already tried. The "),
        marked("id and the current status"),
        plain(" matter more than a click-by-click timeline.")
      ]
    });
  }
  if (!draft.reference.trim()) {
    pool.push({
      id: "need-id",
      label: "Do I need an order or payment id?",
      parts: () => [
        plain("If you have it, yes. An order number or payment id is enough. Without one, include the "),
        marked("amount and the date"),
        plain(" so we can find the charge.")
      ]
    });
  }
  return pool;
}

function answerFreeform(question, draft) {
  const q = question.toLowerCase();
  const pool = questionPool(draft);
  const hit =
    (/evidence|deadline|respond|packet/.test(q) && pool.find((item) => item.id === "evidence")) ||
    (/hold|return|payout/.test(q) && pool.find((item) => item.id === "hold-or-return")) ||
    (/upload|document|verif/.test(q) && pool.find((item) => item.id === "where-upload")) ||
    (/refund|dispute/.test(q) && pool.find((item) => item.id === "refund-dispute")) ||
    (/authenticator|2fa|device|lost/.test(q) && pool.find((item) => item.id === "lost-device")) ||
    (/topic|which/.test(q) && pool.find((item) => item.id === "which-topic")) ||
    (/enough|detail|how much/.test(q) && pool.find((item) => item.id === "how-much")) ||
    (/id|py_|dp_/.test(q) && pool.find((item) => item.id === "need-id"));
  if (hit) return hit.parts();
  return [
    plain("On “"),
    marked(clipText(question, 80)),
    plain("”: "),
    ...(draft.topic ? keyAsk(draft.topic) : landingParts("").slice(0, 3))
  ];
}

function missingParts(issues) {
  const labels = issues.map((issue) => issue.label);
  const parts = [
    plain("Before this can send, add "),
    marked(labels.join(", ")),
    plain(".")
  ];
  if (issues.some((issue) => issue.short)) {
    parts.push(plain(" What happened needs "), marked("at least a sentence"), plain(" — what you expected, what you saw, and what you tried."));
  }
  return parts;
}

function submittedParts(info) {
  const first = info.name.trim().split(/\s+/)[0];
  const parts = [
    plain(first ? `${first}’s case is in as ` : "This case is in as "),
    marked(info.caseId),
    plain(". A reply goes to "),
    marked(info.email.trim()),
    plain(" within "),
    marked("one business day"),
    plain(` about “${clipText(info.subject, 80)}”.`)
  ];
  if (info.priority === "Urgent") {
    parts.push(plain(" It’s in the "), marked("urgent queue"), plain(" because a refund or a bank deadline is time-sensitive."));
  }
  if (info.reference.trim()) {
    parts.push(plain(" Support already has "), marked(info.reference.trim()), plain("."));
  }
  return parts;
}

function initCaseAssist(form) {
  const summary = createLiveSummary(ensureSummarySlot());
  if (!summary) return { invalid() {}, submitted() {} };
  window.__caseSummary = summary;

  let locked = false;
  let frozen = null;
  let lastKey = "";
  let lastSig = "";
  let userEdited = false;
  let typedSinceAnswer = true;
  let questionVisible = false;
  let pauseTimer = 0;
  let rewriteTimer = 0;
  const asked = new Set();

  function field(name) {
    return form.querySelector(`[name='${name}']`)?.value || "";
  }

  function readDraft() {
    if (frozen) return frozen;
    const priority = form.querySelector("input[name='priority']:checked")?.value || "Normal";
    return {
      name: field("name"),
      email: field("email"),
      topic: field("topic"),
      subject: field("subject"),
      details: field("details"),
      reference: field("reference"),
      priority
    };
  }

  function draftKey(draft) {
    return [draft.topic, draft.subject.trim(), draft.details.trim(), draft.priority, draft.reference.trim()].join("\u0001");
  }

  function signature(parts) {
    return parts.map((part) => `${part.mark ? "*" : ""}${part.t}`).join("");
  }

  function caseOffers(draft) {
    const gate = actionGate(draft);
    const text = `${draft.subject} ${draft.details}`.toLowerCase();
    const two = Boolean(gate && /dispute|dp_/.test(text));
    const list = [];
    if (gate) {
      list.push({
        ...gate,
        kind: "action",
        onLeave() { saveCaseHandoff(draft, gate); }
      });
    }
    if (two) {
      list.push({
        id: "evidence",
        kind: "question",
        label: "Does a refund close my bank dispute?",
        parts: () => [
          plain("No. The extra-charge refund and the bank dispute are "),
          marked("two different reviews"),
          plain(". The bank still finishes the one you opened.")
        ],
        onOpen() { asked.add("evidence"); }
      });
    } else if (!gate) {
      const next = questionPool(draft).find((item) => !asked.has(item.id));
      if (next) list.push({ ...next, kind: "question", onOpen() { asked.add(next.id); } });
    }
    return list.slice(0, 2);
  }

  function caseParts(draft) {
    const gate = actionGate(draft);
    const text = `${draft.subject} ${draft.details}`.toLowerCase();
    if (gate && /dispute|dp_/.test(text)) {
      return [plain("You can request a refund of the extra charge. That does "), marked("not close"), plain(" the dispute you opened with your bank.")];
    }
    if (gate) return [plain("You can do this yourself from here: "), marked(gate.name), plain(".")];
    if (draft.details.trim().length > 8) return [plain("You wrote: “"), marked(clipText(draft.details, 90)), plain("”.")];
    if (draft.topic) return [plain("This case is about "), marked(topicLabel(draft.topic)), plain(".")];
    if (draft.subject.trim()) return [plain("Subject so far: “"), marked(clipText(draft.subject, 80)), plain("”.")];
    return [plain("Name the topic and what happened, in your words.")];
  }

  function play(parts, options = {}) {
    lastSig = signature(parts);
    questionVisible = false;
    summary.reply({
      parts,
      ask: options.ask || "follow-up",
      offers: options.offers,
      meta: options.meta,
      phase: options.phase
    });
  }

  function showDraft(meta) {
    const draft = readDraft();
    play(caseParts(draft), { meta, offers: caseOffers(draft) });
  }

  function scheduleRewrite(delay) {
    window.clearTimeout(rewriteTimer);
    rewriteTimer = window.setTimeout(() => {
      if (locked) return;
      const draft = readDraft();
      const key = draftKey(draft);
      if (key === lastKey) return;
      const parts = caseParts(draft);
      const sig = signature(parts);
      lastKey = key;
      if (sig === lastSig) return;
      play(parts, { meta: "Updated from what you entered", offers: caseOffers(draft) });
    }, delay);
  }

  function onUserEdit() {
    if (locked) return;
    userEdited = true;
    typedSinceAnswer = true;
    scheduleRewrite(700);
  }

  ["subject", "details", "reference"].forEach((name) => {
    form.querySelector(`[name='${name}']`)?.addEventListener("input", onUserEdit);
  });
  form.querySelector("[name='topic']")?.addEventListener("change", onUserEdit);
  form.querySelectorAll("input[name='priority']").forEach((input) => {
    input.addEventListener("change", onUserEdit);
  });

  summary.setAsk((value) => {
    typedSinceAnswer = false;
    questionVisible = false;
    return answerFreeform(value, readDraft());
  });
  summary.setNextOffer(() => {
    const next = questionPool(readDraft()).find((item) => !asked.has(item.id));
    if (!next) return null;
    return { ...next, kind: "question", onOpen() { asked.add(next.id); } };
  });

  const opening = readDraft();
  lastKey = draftKey(opening);
  showDraft("Based on this form · just now");

  return {
    invalid(issues) {
      if (locked) return;
      summary.reply({
        parts: missingParts(issues),
        ask: "follow-up",
        meta: "Checked the form",
        phase: "drafting"
      });
    },
    submitted(info) {
      locked = true;
      frozen = { ...info };
      window.clearTimeout(pauseTimer);
      window.clearTimeout(rewriteTimer);
      questionVisible = false;
      summary.reply({
        parts: submittedParts(info),
        ask: "hidden",
        offers: [],
        meta: `Case ${info.caseId}`,
        phase: "submitted"
      });
    }
  };
}

function initSubmit() {
  const form = document.getElementById("case-form");
  if (!form) return;
  const fileLabel = document.getElementById("file-name");
  const fileInput = form.querySelector("input[type='file']");
  if (fileInput && fileLabel) {
    fileInput.addEventListener("change", () => {
      fileLabel.textContent = fileInput.files?.[0]?.name || "No file selected";
    });
  }

  const params = new URLSearchParams(window.location.search);
  const preset = params.get("topic");
  if (preset) {
    const select = form.querySelector("select[name='topic']");
    if (select && [...select.options].some((option) => option.value === preset)) {
      select.value = preset;
    }
  }

  const assist = initCaseAssist(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    const issues = [];
    form.querySelectorAll("[data-required]").forEach((field) => {
      const control = field.querySelector("input, select, textarea");
      const value = control.value.trim();
      let message = "";
      if (!value) message = "This field is required.";
      else if (control.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter a valid email.";
      else if (control.name === "details" && value.length < 20) message = "Add a few more details (at least 20 characters).";
      field.classList.toggle("is-invalid", Boolean(message));
      const error = field.querySelector(".error");
      if (error) error.textContent = message;
      if (message) {
        valid = false;
        const label = field.querySelector("label")?.textContent || "This field";
        issues.push({ label, short: control.name === "details" && value.length > 0 });
      }
    });
    if (!valid) {
      assist.invalid(issues);
      form.querySelector(".is-invalid input, .is-invalid select, .is-invalid textarea")?.focus();
      return;
    }

    const data = new FormData(form);
    const caseId = `HC-${Math.floor(10000 + Math.random() * 89999)}`;
    assist.submitted({
      caseId,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      details: String(data.get("details") || ""),
      topic: String(data.get("topic") || ""),
      reference: String(data.get("reference") || ""),
      priority: String(data.get("priority") || "Normal")
    });
    const card = document.getElementById("case-card");
    card.innerHTML = `
      <div class="success">
        <div class="success-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2>Case submitted</h2>
        <p>We sent a confirmation to ${escapeHtml(data.get("email"))}. A specialist will reply within one business day.</p>
        <div class="case-id">${caseId}</div>
        <p>Subject: ${escapeHtml(data.get("subject"))}</p>
        <div class="success-actions">
          <a class="btn-secondary" href="index.html">Back to help center</a>
          <button type="button" class="btn-primary" id="another-case">Submit another</button>
        </div>
      </div>`;
    document.getElementById("another-case").addEventListener("click", () => window.location.reload());
  });
}

const SUMMARY_STORAGE = "nl-smart-summary";

const SUMMARY_FEATURES = [
  { id: "label", name: "Label", detail: "Sparkle and the title." },
  { id: "body", name: "Summary", detail: "The drafted sentence and blue highlights." },
  { id: "generating", name: "Generating", detail: "A short shimmer, then the summary appears." },
  { id: "meta", name: "Meta line", detail: "The reason under the summary." },
  { id: "helpful", name: "Helpful", detail: "Thumbs on the meta row." },
  { id: "ask", name: "Ask", detail: "The question field." },
  { id: "questions", name: "Question chip", detail: "Offered after a pause." }
];

const PLACEMENTS = [
  { id: "float", name: "Float" },
  { id: "below-search", name: "Under title" },
  { id: "below-header", name: "In article" },
  { id: "rail", name: "Beside" }
];

const SCREEN_BLUEPRINT = {
  home: {
    name: "Home",
    placement: "float",
    quiet: true,
    label: "AI Helper",
    askPlaceholder: "Ask a question…",
    note: "Floats centered along the bottom, and wider than the other cards. It starts as an ask field, with no summary until you ask or the page changes."
  },
  search: {
    name: "Search result",
    placement: "below-search",
    quiet: false,
    label: "AI Helper",
    askPlaceholder: "Ask a follow-up question…",
    note: "Sits under the results heading, above the list, in one column."
  },
  article: {
    name: "Knowledge article",
    placement: "below-header",
    quiet: false,
    label: "AI Helper",
    askPlaceholder: "Ask a follow-up question…",
    note: "Sits between the article title and the article body."
  },
  action: {
    name: "Action",
    placement: "rail",
    quiet: false,
    label: "AI Helper",
    askPlaceholder: "Ask a follow-up question…",
    note: "Sticks beside the automation form."
  },
  submit: {
    name: "Submit a case",
    placement: "rail",
    quiet: false,
    label: "AI Helper",
    askPlaceholder: "Ask a follow-up question…",
    note: "Sticks beside the case form."
  }
};

function readSummaryConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(SUMMARY_STORAGE) || "{}");
    return {
      parts: saved.parts && typeof saved.parts === "object" ? saved.parts : {},
      placement: saved.placement && typeof saved.placement === "object" ? saved.placement : {}
    };
  } catch {
    return { parts: {}, placement: {} };
  }
}

function writeSummaryConfig(config) {
  localStorage.setItem(SUMMARY_STORAGE, JSON.stringify(config));
}

function featureOn(id) {
  const value = readSummaryConfig().parts[id];
  return value === undefined ? true : Boolean(value);
}

function screenSpec(page) {
  return SCREEN_BLUEPRINT[page] || SCREEN_BLUEPRINT.home;
}

function placementFor(page) {
  const saved = readSummaryConfig().placement[page];
  return PLACEMENTS.some((item) => item.id === saved) ? saved : screenSpec(page).placement;
}

function applySummaryChrome(card) {
  const page = document.body.dataset.page || "home";
  const spec = screenSpec(page);
  document.body.dataset.summaryPlacement = placementFor(page);
  if (!card) return;
  card.dataset.off = SUMMARY_FEATURES.filter((feature) => !featureOn(feature.id)).map((feature) => feature.id).join(" ");
  const quiet = Boolean(spec.quiet) && card.dataset.spoke !== "1";
  card.classList.toggle("is-quiet", quiet);
  card.dataset.summary = quiet ? "off" : card.dataset.summary || "on";
  card.dataset.ask = quiet ? "ask" : card.dataset.ask || "follow-up";
  card.setAttribute("aria-label", "AI Helper");
  const label = card.querySelector("[data-summary-label]");
  if (label) label.textContent = "AI Helper";
  const input = card.querySelector("[data-summary-ask] input");
  if (input) {
    input.placeholder = spec.askPlaceholder;
    input.setAttribute("aria-label", quiet ? "Ask a question" : "Ask a follow-up question");
  }
}

function openSummary(card) {
  card.dataset.spoke = "1";
  card.classList.remove("is-quiet");
  card.dataset.summary = "on";
  if (card.dataset.ask !== "hidden") card.dataset.ask = "follow-up";
  card.setAttribute("aria-label", "AI Helper");
}

const SUMMARY_HTML = `
<section class="ai-card case-assist" aria-busy="false" aria-label="AI Helper">
  <div class="ai-card__body">
    <div class="ai-card__label" data-part="label">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path>
      </svg>
      <span data-summary-label>AI Helper</span>
    </div>
    <div data-part="body">
      <div class="assist-shimmer" data-part="generating" data-summary-shimmer hidden>
        <span></span><span></span><span></span>
      </div>
      <p class="ai-card__text" data-summary-text aria-hidden="true"></p>
    </div>
    <p class="assist-status" data-summary-status role="status"></p>
    <div class="ai-card__meta">
      <span data-part="meta" data-summary-meta></span>
      <span class="helpful" data-part="helpful">
        Was this helpful?
        <button type="button" data-assist-helpful="yes" aria-label="Yes, this was helpful">👍</button>
        <button type="button" data-assist-helpful="no" aria-label="No, this was not helpful">👎</button>
      </span>
    </div>
  </div>
  <div class="ai-card__ask">
    <form class="ai-ask-row" data-part="ask" data-summary-ask>
      <input type="text" placeholder="Ask a follow-up question…" aria-label="Ask a follow-up question" autocomplete="off" />
      <button type="submit" class="ai-ask-send" aria-label="Send question">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
        </svg>
      </button>
    </form>
    <div class="assist-questions" data-part="questions" data-summary-questions></div>
  </div>
</section>`;

function mountBlueprint(row) {
  const page = document.body.dataset.page || "home";
  const opener = document.createElement("a");
  opener.className = "blueprint-entry";
  opener.href = "blueprint.html";
  opener.textContent = "Blueprint";
  if (page === "blueprint") opener.setAttribute("aria-current", "page");
  row.appendChild(opener);
}

const TEST_PLAN_KEY = "nl-test-plan";
const PLAN_RESULT_KEY = "nl-plan1-results";
const PLAN_MATRIX_TAB_KEY = "nl-plan1-matrix-tab";

const PLAN_MATRIX_COLS = [
  { id: "summary", label: "Summary" },
  { id: "ask", label: "Ask a question" },
  { id: "suggest", label: "Question suggesting" }
];

const PLAN_MATRIX = [
  {
    context: "Home",
    href: "index.html",
    summary: "",
    ask: "They go straight to Ask AI with what happened — two charges, a missing credit.",
    suggest: "The questions people ask most: charged twice, refund isn’t here, I opened a bank dispute."
  },
  {
    context: "Knowledge article",
    href: "article.html?id=duplicate-charge",
    summary: "A synthesis of this article from their keywords — the facts on the page, not a pointer to the title.",
    ask: "The follow-up they still have after reading: does a refund cancel the bank dispute?",
    suggest: "The questions this article usually raises, offered as chips under the summary."
  },
  {
    context: "Search",
    href: "search.html?q=charged+twice",
    summary: "A synthesis of the results on screen from their keywords — what the articles say, not which title to open.",
    ask: "A freeform refine of “charged twice” if the list is still mixed.",
    suggest: "Narrow the search: Refunds, or Bank disputes."
  },
  {
    context: "Action",
    href: "action.html",
    summary: "Guidance for the refund they are about to send — extra $86 on order 1044.",
    ask: "A clarification: does this also close the bank dispute they already opened?",
    suggest: "The next step or a troubleshooting chip, before they confirm."
  },
  {
    context: "Submit a case",
    href: "submit.html",
    summary: "Help preparing the case from what they already wrote.",
    ask: "Questions while they describe what happened, if the case is still the right move.",
    suggest: "A self-serve way out if one exists: request the refund instead of opening a case."
  }
];

function readPlanResults() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLAN_RESULT_KEY) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function writePlanResult(context, col, value) {
  const saved = readPlanResults();
  if (!saved[context]) saved[context] = {};
  saved[context][col] = value;
  localStorage.setItem(PLAN_RESULT_KEY, JSON.stringify(saved));
}

const TEST_PLAN = [
  {
    name: "Home",
    href: "index.html",
    screen: "Home",
    watch: "No page summary. Ask AI and the questions people ask most.",
    path: "Do they go straight to Ask AI, or tap a suggested question?",
    scene: "You opened Help because your card shows two $86 charges for order 1044. You don’t know yet if this is a refund, a bank dispute, or a missing credit.",
    task: "What would you do next on this page?",
    record: "First move: the search bar, a chip, Ask AI, a topic, Popular articles, or Submit a case. Note if the helper was still empty.",
    ask: "Did you just want to ask, or pick a suggested question?"
  },
  {
    name: "Knowledge article",
    href: "article.html?id=duplicate-charge",
    screen: "Knowledge article",
    watch: "A synthesis of this article from their keywords, plus the questions it usually raises.",
    path: "Does the summary pull the facts from the page? What follow-up do they actually ask?",
    scene: "You’ve opened Duplicate charges. It explains how to tell two successful payments from a retry. You already opened a bank dispute on one charge, and you’re not sure whether refunding the extra one closes that dispute.",
    task: "What would you do next on this page?",
    record: "Read the summary, scroll the article, ask a follow-up, use the chip, or leave.",
    ask: "Was the summary useful? What did you still need to ask?"
  },
  {
    name: "Search results",
    href: "search.html?q=charged+twice",
    screen: "Search result",
    watch: "A synthesis of the results from their keywords, plus a way to refine the query.",
    path: "Does the summary pull facts from the list, or only point at a title?",
    scene: "You searched “charged twice.” The list mixes an article about the extra payment with one about a refund when a bank dispute is already open. You’re not sure which one to open.",
    task: "What would you do next on this page?",
    record: "Open a result, read the AI overview, use Narrow to Refunds or Narrow to Bank disputes, change the topic chips, or ask the helper.",
    ask: "Did you want the results summarized, or help narrowing the search?"
  },
  {
    name: "Action",
    href: "action.html",
    screen: "Action",
    watch: "Guidance for the action they are about to run, plus the next step.",
    path: "Do they need instructions, troubleshooting, or a clarification?",
    scene: "You’re about to request a refund of the extra $86 on order 1044. The form is filled in. You’re not sure if this also closes the bank dispute you already opened.",
    task: "What would you do next on this page?",
    record: "Read the helper, open a chip, change a field, send the request, or leave.",
    ask: "Did you need instructions, troubleshooting, or a clarification?"
  },
  {
    name: "Submit a case",
    href: "submit.html",
    screen: "Submit a case",
    watch: "Help preparing the case, plus a self-serve way out if one already exists.",
    path: "Is AI filling the case, or keeping them from opening one they do not need?",
    scene: "You’ve started a case about order 1044. Your card shows two $86 charges. The extra charge is still there. You’re not sure if you should send this case, or request the refund yourself.",
    task: "What would you do next on this page?",
    record: "Submit the case, take Request the refund, edit the form, or ask the helper.",
    ask: "Did AI help you fill the case, or keep you from opening one you didn’t need?"
  }
];

function buildPlanMatrix(kind) {
  const results = kind === "result" ? readPlanResults() : null;
  const wrap = document.createElement("section");
  wrap.className = `plan-matrix plan-matrix--${kind}`;
  wrap.setAttribute("aria-label", kind === "hypothesis" ? "Hypothesis" : "Actual result");

  const hint = document.createElement("p");
  hint.className = "plan-matrix__hint";
  hint.textContent = kind === "hypothesis"
    ? "What we think is useful in each cell."
    : "What they actually used. Click a cell to add notes.";
  wrap.appendChild(hint);

  const table = document.createElement("table");
  table.className = "plan-matrix__table";
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const contextHead = document.createElement("th");
  contextHead.scope = "col";
  contextHead.className = "plan-matrix__col-context";
  contextHead.textContent = "Context";
  headRow.appendChild(contextHead);
  PLAN_MATRIX_COLS.forEach((col) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.className = `plan-matrix__col-${col.id}`;
    th.textContent = col.label;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  PLAN_MATRIX.forEach((row) => {
    const tr = document.createElement("tr");
    const context = document.createElement("th");
    context.scope = "row";
    context.className = "plan-matrix__col-context";
    const link = document.createElement("a");
    link.href = row.href;
    link.textContent = row.context;
    link.addEventListener("click", () => sessionStorage.setItem(TEST_PLAN_KEY, "1"));
    context.appendChild(link);
    tr.appendChild(context);
    PLAN_MATRIX_COLS.forEach((col) => {
      const td = document.createElement("td");
      td.className = `plan-matrix__col-${col.id}`;
      if (kind === "hypothesis") {
        td.textContent = row[col.id] || "";
        if (!row[col.id]) td.classList.add("is-empty");
      } else {
        const cell = document.createElement("div");
        cell.className = "plan-matrix__edit";
        cell.contentEditable = "true";
        cell.dataset.placeholder = "What they used…";
        cell.textContent = results?.[row.context]?.[col.id] || "";
        cell.addEventListener("blur", () => {
          writePlanResult(row.context, col.id, cell.textContent.trim());
        });
        td.appendChild(cell);
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

function buildPlanMatrixTabs() {
  const wrap = document.createElement("section");
  wrap.className = "plan-matrix-tabs";

  const tablist = document.createElement("div");
  tablist.className = "plan-matrix-tabs__list";
  tablist.setAttribute("role", "tablist");
  tablist.setAttribute("aria-label", "Plan 1 matrices");

  const hypothesis = buildPlanMatrix("hypothesis");
  const result = buildPlanMatrix("result");
  hypothesis.id = "plan-matrix-hypothesis";
  result.id = "plan-matrix-result";
  hypothesis.setAttribute("role", "tabpanel");
  result.setAttribute("role", "tabpanel");

  const tabs = [
    { id: "hypothesis", label: "Hypothesis", panel: hypothesis },
    { id: "result", label: "Actual result", panel: result }
  ];

  function select(id) {
    tabs.forEach((tab) => {
      const on = tab.id === id;
      tab.button.setAttribute("aria-selected", on ? "true" : "false");
      tab.button.tabIndex = on ? 0 : -1;
      tab.panel.hidden = !on;
    });
    sessionStorage.setItem(PLAN_MATRIX_TAB_KEY, id);
  }

  tabs.forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "plan-matrix-tabs__tab";
    button.id = `plan-matrix-tab-${tab.id}`;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", tab.panel.id);
    button.textContent = tab.label;
    button.addEventListener("click", () => select(tab.id));
    tab.button = button;
    tab.panel.setAttribute("aria-labelledby", button.id);
    tablist.appendChild(button);
  });

  wrap.append(tablist, hypothesis, result);
  select(sessionStorage.getItem(PLAN_MATRIX_TAB_KEY) === "result" ? "result" : "hypothesis");
  return wrap;
}

function mountTestPlan(row) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "blueprint-entry test-entry";
  button.textContent = "Test plan";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "test-plan");
  button.addEventListener("click", () => {
    const panel = document.getElementById("test-plan");
    if (!panel) return;
    setTestPlanOpen(panel, button, panel.hidden);
  });
  row.appendChild(button);
}

function setTestPlanOpen(panel, button, open, silent) {
  const layer = panel.closest(".journey-layer") || panel;
  layer.hidden = !open;
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.setAttribute("aria-pressed", open ? "true" : "false");
  if (open) sessionStorage.setItem(TEST_PLAN_KEY, "1");
  else sessionStorage.removeItem(TEST_PLAN_KEY);
  if (!silent) window.dispatchEvent(new Event("resize"));
}

function mountTestPlanPanel() {
  const layer = document.createElement("div");
  layer.className = "journey-layer";
  layer.id = "test-plan";
  layer.hidden = true;

  const backdrop = document.createElement("button");
  backdrop.type = "button";
  backdrop.className = "journey-backdrop";
  backdrop.setAttribute("aria-label", "Close test plan");
  backdrop.addEventListener("click", () => {
    const button = document.querySelector(".test-entry");
    if (button) setTestPlanOpen(layer, button, false);
  });

  const panel = document.createElement("aside");
  panel.className = "journey";
  panel.setAttribute("aria-label", "Test plan 1 of 3");

  const head = document.createElement("div");
  head.className = "journey__head";
  const titles = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "journey__kicker";
  kicker.textContent = "Plan 1 of 3";
  const title = document.createElement("h2");
  title.textContent = "The right help on each page";
  titles.append(kicker, title);
  const close = document.createElement("button");
  close.type = "button";
  close.className = "journey__close";
  close.textContent = "Close";
  close.addEventListener("click", () => {
    const button = document.querySelector(".test-entry");
    if (button) setTestPlanOpen(panel, button, false);
  });
  head.append(titles, close);

  const scroll = document.createElement("div");
  scroll.className = "journey__scroll";
  const lede = document.createElement("p");
  lede.className = "journey__lede";
  lede.textContent = "What kind of AI help is actually useful on each Help Center screen. Hypothesis is filled. Open Actual result after a session to record what they used.";
  const task = document.createElement("p");
  task.className = "journey__lede";
  task.textContent = "Protocol: show the page, read the scenario, ask the task, stay quiet while they act, then ask the follow-up.";
  scroll.append(lede, task);
  scroll.appendChild(buildPlanMatrixTabs());

  TEST_PLAN.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "journey-beat";
    const label = document.createElement("p");
    label.className = "journey-beat__step";
    label.textContent = `${index + 1} · ${item.name}`;
    card.appendChild(label);
    [
      ["Hypothesis", item.watch],
      ["Validate", item.path],
      ["Scenario", item.scene],
      ["Task", item.task],
      ["Record", item.record],
      ["Then ask", item.ask]
    ].forEach(([name, copy]) => {
      const block = document.createElement("p");
      if (name === "Scenario") block.className = "journey-beat__scene";
      const strong = document.createElement("strong");
      strong.textContent = name;
      block.append(strong, document.createTextNode(` ${copy}`));
      card.appendChild(block);
    });
    const link = document.createElement("a");
    link.className = "journey-beat__go";
    link.href = item.href;
    link.textContent = `Open ${item.screen}`;
    link.addEventListener("click", () => sessionStorage.setItem(TEST_PLAN_KEY, "1"));
    card.appendChild(link);
    scroll.appendChild(card);
  });

  panel.append(head, scroll);
  layer.append(backdrop, panel);

  if (sessionStorage.getItem(TEST_PLAN_KEY) === "1") {
    queueMicrotask(() => {
      const button = document.querySelector(".test-entry");
      if (button) setTestPlanOpen(layer, button, true);
    });
  }
  return layer;
}

function initBlueprintPage() {
  if (document.body.dataset.page !== "blueprint") return;
  const partsRoot = document.querySelector("[data-blueprint-parts]");
  const screensRoot = document.querySelector("[data-blueprint-screens]");
  if (!partsRoot || !screensRoot) return;

  SUMMARY_FEATURES.forEach((feature) => {
    const label = document.createElement("label");
    label.className = "bp-switch";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.feature = feature.id;
    const copy = document.createElement("span");
    const name = document.createElement("strong");
    name.textContent = feature.name;
    const detail = document.createElement("small");
    detail.textContent = feature.detail;
    copy.append(name, detail);
    label.append(input, copy);
    input.addEventListener("change", () => {
      const config = readSummaryConfig();
      config.parts[feature.id] = input.checked;
      writeSummaryConfig(config);
      refreshBlueprint();
    });
    partsRoot.appendChild(label);
  });

  Object.entries(SCREEN_BLUEPRINT).forEach(([id, spec]) => {
    const row = document.createElement("div");
    row.className = "bp-screen-row";
    row.dataset.screen = id;
    const copy = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = spec.name;
    const note = document.createElement("p");
    note.textContent = spec.note;
    copy.append(name, note);
    const places = document.createElement("div");
    places.className = "bp-places";
    PLACEMENTS.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "bp-place";
      button.dataset.placement = item.id;
      button.textContent = item.name;
      button.addEventListener("click", () => {
        const config = readSummaryConfig();
        config.placement[id] = item.id;
        writeSummaryConfig(config);
        refreshBlueprint();
      });
      places.appendChild(button);
    });
    row.append(copy, places);
    screensRoot.appendChild(row);
  });

  function refreshBlueprint() {
    document.querySelectorAll("[data-bp]").forEach((node) => {
      node.classList.toggle("is-off", !featureOn(node.dataset.bp));
    });
    document.querySelectorAll(".bp-switch input").forEach((input) => {
      input.checked = featureOn(input.dataset.feature);
    });
    document.querySelectorAll(".bp-screen-row").forEach((row) => {
      const current = placementFor(row.dataset.screen);
      row.querySelectorAll(".bp-place").forEach((button) => {
        button.setAttribute("aria-pressed", button.dataset.placement === current ? "true" : "false");
      });
    });
  }

  document.querySelector("[data-blueprint-reset]")?.addEventListener("click", () => {
    localStorage.removeItem(SUMMARY_STORAGE);
    refreshBlueprint();
  });
  refreshBlueprint();

  const frame = document.querySelector(".bp-stage__frame");
  const stageLabel = document.querySelector("[data-stage-label]");
  const poses = [
    ["float", "Float"],
    ["inline", "In the content"],
    ["beside", "Beside"]
  ];
  if (frame && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % poses.length;
      const [id, name] = poses[index];
      frame.dataset.pose = id;
      if (stageLabel) stageLabel.textContent = name;
      document.querySelectorAll("[data-stage-chip]").forEach((chip) => {
        chip.classList.toggle("is-on", chip.dataset.stageChip === id);
      });
    }, 2400);
  }
}

function mountTabs() {
  if (document.querySelector(".studio")) return;
  // Embedded by the walkthrough: render the bare page, no browser chrome.
  if (window.self !== window.top && /[?&]frame=1/.test(window.location.search)) {
    document.documentElement.classList.add("kd-frame");
    return;
  }
  const page = document.body.dataset.page || "";
  const tabs = [
    // Demo 1 (search) tabs, hidden for the case + automation demo:
    // ["home", "index.html", "Home", "help.northline.test"],
    // ["search", "search.html?q=charged+twice", "Search result", "help.northline.test/search?q=charged+twice"],
    ["article", "article.html?id=respond-dispute&demo=1", "Knowledge article", "help.northline.test/articles/duplicate-charges"],
    // Submit a case and Action are one tab; the case hands off to the action page.
    ["submit", "submit.html?demo=1", "Case + automation", "help.northline.test/cases/new"]
    // ["action", "action.html", "Action", "help.northline.test/actions/new"]
  ];
  const tabFor = { action: "submit" };
  const address = page === "blueprint"
    ? "help.northline.test/blueprint"
    : page === "action"
      ? "help.northline.test/actions/new"
      : (tabs.find(([id]) => id === page) || tabs[0])[3];

  const bar = document.createElement("div");
  bar.className = "studio-bar";
  const nav = document.createElement("nav");
  nav.className = "screen-tabs";
  nav.setAttribute("aria-label", "Screens");
  tabs.forEach(([id, href, label]) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    if (id === (tabFor[page] || page)) link.setAttribute("aria-current", "page");
    nav.appendChild(link);
  });
  bar.appendChild(nav);
  const edit = document.createElement("a");
  edit.className = "studio-link";
  edit.href = "manage.html";
  edit.textContent = "Edit script";
  bar.appendChild(edit);
  // mountTestPlan(bar); // hidden for the demos
  // mountBlueprint(bar); // hidden for the demos

  const chrome = document.createElement("div");
  chrome.className = "browser-chrome";
  chrome.setAttribute("aria-hidden", "true");
  chrome.innerHTML = `
    <span class="browser-dots"><i></i><i></i><i></i></span>
    <div class="browser-address">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <rect x="5" y="11" width="14" height="9" rx="2"></rect>
        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
      </svg>
      <span></span>
    </div>`;
  chrome.querySelector(".browser-address span").textContent = address;

  const viewport = document.createElement("div");
  viewport.className = "browser-viewport";
  [...document.body.childNodes].forEach((node) => {
    if (node.nodeType === 1 && node.tagName === "SCRIPT") return;
    if (node.nodeType === 3 && !node.textContent.trim()) return;
    viewport.appendChild(node);
  });

  const browser = document.createElement("div");
  browser.className = "browser";
  browser.setAttribute("role", "region");
  browser.setAttribute("aria-label", "Website");
  browser.append(chrome, viewport);

  browser.appendChild(mountTestPlanPanel());

  const stage = document.createElement("div");
  stage.className = "studio-stage";
  stage.append(browser);

  const studio = document.createElement("div");
  studio.className = "studio";
  studio.append(bar, stage);
  document.body.appendChild(studio);
  document.body.dataset.summaryPlacement = placementFor(page);
}

function ensureSummarySlot() {
  const slot = document.querySelector("[data-summary-slot]");
  if (!slot) return null;
  if (!slot.querySelector(".case-assist")) slot.innerHTML = SUMMARY_HTML;
  const card = slot.querySelector(".case-assist");
  applySummaryChrome(card);
  return card;
}

function createLiveSummary(card) {
  if (!card) return null;
  const textEl = card.querySelector("[data-summary-text]");
  const metaEl = card.querySelector("[data-summary-meta]");
  const labelEl = card.querySelector("[data-summary-label]");
  const shimmer = card.querySelector("[data-summary-shimmer]");
  const statusEl = card.querySelector("[data-summary-status]");
  const questionBox = card.querySelector("[data-summary-questions]");
  const askForm = card.querySelector("[data-summary-ask]");
  const askInput = askForm?.querySelector("input");
  if (!textEl || !metaEl || !labelEl) return null;

  mountCitePreview();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let gen = 0;
  let generating = false;
  let askHandler = null;

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function chipFor(question) {
    const button = question.href ? document.createElement("a") : document.createElement("button");
    button.className = "question-btn";
    if (question.href) {
      button.href = question.href;
      button.addEventListener("click", () => {
        if (question.onLeave) question.onLeave();
      });
    } else button.type = "button";
    const badge = document.createElement("span");
    badge.className = "q";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = question.href ? "→" : "?";
    button.append(badge, document.createTextNode(question.label));
    if (!question.href) {
      button.addEventListener("click", () => {
        button.setAttribute("aria-pressed", "true");
        if (question.onOpen) question.onOpen();
        const parts = typeof question.parts === "function" ? question.parts() : question.parts;
        answerWith(parts);
      });
    }
    return button;
  }

  let offers = [];
  let nextOffer = null;
  let lastParts = null;
  let lastMeta = "";

  function applyAsk(mode) {
    const askMode = mode || "follow-up";
    card.dataset.ask = askMode;
    if (!askInput) return;
    const first = askMode === "ask";
    askInput.placeholder = first ? "Ask a question…" : "Ask a follow-up question…";
    askInput.setAttribute("aria-label", first ? "Ask a question" : "Ask a follow-up question");
  }

  function paintOffers() {
    if (!questionBox) return;
    questionBox.replaceChildren();
    if (!featureOn("questions")) return;
    offers.slice(0, 3).forEach((question) => questionBox.appendChild(chipFor(question)));
  }

  function setOffers(list) {
    offers = Array.isArray(list) ? list.filter(Boolean).slice(0, 3) : [];
    paintOffers();
  }

  function hideQuestion() {
    setOffers([]);
  }

  function showQuestion(question) {
    if (!featureOn("questions") || !question) return;
    setOffers([question]);
    if (!question.href && !generating && featureOn("meta")) {
      metaEl.textContent = "You paused — this might help";
      card.dataset.phase = "hesitating";
    }
  }

  function finish(parts, options, flags) {
    generating = false;
    card.classList.remove("is-generating");
    card.setAttribute("aria-busy", "false");
    if (flags.label) labelEl.textContent = "AI Helper";
    if (flags.meta) metaEl.textContent = options.meta || "";
    card.dataset.phase = options.phase || "ready";
    if (statusEl && parts) statusEl.textContent = parts.map((part) => part.t).join("");
  }

  function paintParts(parts) {
    textEl.replaceChildren();
    parts.forEach((part) => {
      if (!part.t) return;
      if (part.mark) {
        const markEl = document.createElement("mark");
        markEl.textContent = part.t;
        markEl.classList.add("is-hot");
        textEl.appendChild(markEl);
      } else {
        textEl.appendChild(document.createTextNode(part.t));
      }
    });
    if (!reduceMotion) {
      textEl.classList.remove("is-appearing");
      void textEl.offsetWidth;
      textEl.classList.add("is-appearing");
    }
  }

  function shapeFor(parts, ask) {
    const hasSummary = Boolean(parts && parts.length);
    card.classList.toggle("is-quiet", !hasSummary);
    card.dataset.summary = hasSummary ? "on" : "off";
    if (hasSummary) card.dataset.spoke = "1";
    applyAsk(ask || (hasSummary ? "follow-up" : "ask"));
  }

  async function reply(options = {}) {
    const token = ++gen;
    const alive = () => token === gen;
    const parts = options.parts && options.parts.length ? options.parts : null;
    const flags = {
      body: featureOn("body"),
      generating: featureOn("generating"),
      meta: featureOn("meta"),
      label: featureOn("label")
    };
    if (options.offers) setOffers(options.offers);
    else if (options.clearOffers) setOffers([]);
    shapeFor(flags.body ? parts : null, options.ask);
    if (flags.label) labelEl.textContent = "AI Helper";
    if (!parts || !flags.body) {
      generating = false;
      card.classList.remove("is-generating", "is-rewriting");
      card.setAttribute("aria-busy", "false");
      if (shimmer) shimmer.hidden = true;
      textEl.replaceChildren();
      textEl.hidden = true;
      if (flags.meta && options.meta) metaEl.textContent = options.meta;
      card.dataset.phase = options.phase || "ready";
      return;
    }
    lastParts = parts;
    lastMeta = options.meta || "";
    if (options.instant) {
      generating = false;
      card.classList.remove("is-generating", "is-rewriting");
      card.setAttribute("aria-busy", "false");
      if (shimmer) shimmer.hidden = true;
      textEl.hidden = false;
      paintParts(parts);
      renderCites(textEl, citesForSummary(parts));
      finish(parts, options, flags);
      return;
    }
    const showSkeleton = flags.generating && !reduceMotion && !options.instant;
    generating = true;
    card.dataset.phase = "drafting";
    card.setAttribute("aria-busy", "true");
    card.classList.toggle("is-generating", showSkeleton);
    if (flags.meta) metaEl.textContent = "Reading this screen";
    textEl.classList.remove("is-appearing");
    textEl.replaceChildren();
    textEl.hidden = true;
    if (shimmer) shimmer.hidden = !showSkeleton;
    await wait(showSkeleton ? 800 : 0);
    if (!alive()) return;
    if (shimmer) shimmer.hidden = true;
    card.classList.remove("is-generating");
    textEl.hidden = false;
    paintParts(parts);
    if (!alive()) return;
    renderCites(textEl, citesForSummary(parts));
    finish(parts, options, flags);
  }

  function play(parts, options = {}) {
    return reply({
      parts,
      ask: options.ask || "follow-up",
      offers: options.offers,
      clearOffers: options.clearOffers,
      meta: options.meta,
      phase: options.phase,
      instant: options.instant
    });
  }

  function answerWith(parts, meta) {
    const follow = typeof nextOffer === "function" ? nextOffer() : null;
    reply({
      parts,
      ask: "follow-up",
      offers: follow ? [follow] : [],
      clearOffers: !follow,
      meta: meta || "Answered your question",
      phase: "answered"
    });
  }

  askForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = askInput?.value.trim() || "";
    if (!value || generating) return;
    askInput.value = "";
    const parts = askHandler
      ? askHandler(value)
      : [plain("On “"), marked(clipText(value, 80)), plain("”.")];
    answerWith(parts, parts.meta);
  });

  card.querySelectorAll("[data-assist-helpful]").forEach((button) => {
    button.addEventListener("click", () => {
      card.querySelectorAll("[data-assist-helpful]").forEach((other) => other.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      if (!generating) metaEl.textContent = "Thanks — noted.";
    });
  });

  function collapse(suggestion) {
    gen += 1;
    generating = false;
    card.classList.remove("is-generating");
    card.setAttribute("aria-busy", "false");
    card.classList.add("is-quiet");
    card.dataset.summary = "off";
    card.dataset.spoke = "1";
    applyAsk("follow-up");
    if (shimmer) shimmer.hidden = true;
    textEl.hidden = true;
    if (suggestion) setOffers([suggestion]);
  }

  function restore() {
    if (!lastParts) return;
    reply({ parts: lastParts, ask: "follow-up", offers: [], clearOffers: true, instant: true, meta: lastMeta });
  }

  return {
    play,
    reply,
    collapse,
    restore,
    showQuestion,
    hideQuestion,
    isGenerating: () => generating,
    setAsk(handler) {
      askHandler = handler;
    },
    setNextOffer(handler) {
      nextOffer = handler;
    }
  };
}

function armPause(summary, getQuestion) {
  const asked = new Set();
  let timer = 0;
  return function poke() {
    window.clearTimeout(timer);
    summary.hideQuestion();
    const tick = () => {
      if (summary.isGenerating()) {
        timer = window.setTimeout(tick, 350);
        return;
      }
      const question = getQuestion(asked);
      if (question) summary.showQuestion(question);
    };
    timer = window.setTimeout(tick, 1500);
  };
}

function summaryParts(query, topic, results) {
  const q = (query || "").toLowerCase();
  let lead = topic && topic !== "All" ? topic : "";
  if (!lead) {
    if (/hold|payout|reserve/.test(q)) lead = "Payouts";
    else if (/verif|document|upload|identity|kyc/.test(q)) lead = "Verification";
    else if (/refund/.test(q)) lead = "Refunds";
    else if (/dispute|chargeback|evidence/.test(q)) lead = "Disputes";
    else if (/2fa|authenticator|security|recovery|login/.test(q)) lead = "Security";
  }
  if (!results.length) {
    return [plain("Nothing on this list matches that wording. Try a shorter phrase, or "), marked("submit a case"), plain(".")];
  }
  if (q.trim()) return resultsContentParts(query, results);
  if (lead) {
    const count = `${results.length} matching article${results.length === 1 ? "" : "s"}`;
    return [...topicLead(lead), plain(" "), marked(count), plain(".")];
  }
  return resultsContentParts(query, results);
}

function searchOffers(query, topic, results) {
  const q = (query || "").toLowerCase();
  if (/twice|duplicate/.test(q)) {
    const offers = [];
    if (topic !== "Refunds") {
      offers.push({
        id: "narrow-refunds",
        kind: "action",
        label: "Narrow to Refunds",
        href: searchUrl(query, "Refunds")
      });
    }
    if (topic !== "Disputes") {
      offers.push({
        id: "narrow-disputes",
        kind: "action",
        label: "Narrow to Bank disputes",
        href: searchUrl(query, "Disputes")
      });
    }
    return offers;
  }
  if (/dispute|evidence/.test(q) || topic === "Disputes") {
    return [{
      id: "evidence",
      kind: "question",
      label: "What should I send my bank?",
      parts: () => topicLead("Disputes")
    }];
  }
  if (!results.length) {
    return [{ id: "case", kind: "action", label: "Submit a case", href: "submit.html" }];
  }
  return [{
    id: "open",
    kind: "action",
    label: `Open ${clipText(results[0].title, 42)}`,
    href: `article.html?id=${encodeURIComponent(results[0].id)}`
  }];
}

function mountSearchSummary() {
  const summary = createLiveSummary(ensureSummarySlot());
  if (!summary) return;
  const asked = new Set();
  window.__summarizeSearch = (query, topic, results) => {
    summary.reply({
      parts: summaryParts(query, topic, results),
      ask: "follow-up",
      offers: searchOffers(query, topic, results),
      meta: results.length ? `From ${results.length} articles on this page` : "No matching articles",
      phase: "drafting"
    });
  };
  window.__summarizeArticle = (article) => {
    summary.reply({
      parts: articleContentParts(article),
      ask: "follow-up",
      offers: [{
        id: "open-article",
        kind: "action",
        label: `Open ${clipText(article.title, 42)}`,
        href: `article.html?id=${encodeURIComponent(article.id)}`
      }],
      meta: article.path,
      phase: "drafting"
    });
  };
  let hovered = "";
  document.getElementById("result-list")?.addEventListener("mouseover", (event) => {
    const link = event.target.closest("[data-id]");
    if (!link || link.dataset.id === hovered) return;
    hovered = link.dataset.id;
    const article = ARTICLES.find((item) => item.id === hovered);
    if (!article) return;
    summary.reply({
      parts: articleContentParts(article),
      ask: "follow-up",
      offers: [{
        id: "open",
        kind: "action",
        label: `Open ${clipText(article.title, 42)}`,
        href: `article.html?id=${encodeURIComponent(article.id)}`
      }],
      meta: `From this result · ${article.path}`,
      phase: "drafting"
    });
  });
  summary.setAsk((value) => answerFreeform(value, {
    topic: new URLSearchParams(window.location.search).get("topic") || "",
    subject: "",
    details: value,
    reference: "",
    priority: "Normal"
  }));
  summary.setNextOffer(() => {
    if (asked.has("which")) return null;
    asked.add("which");
    return {
      id: "which",
      kind: "question",
      label: "What do these articles say?",
      parts: () => {
        const query = document.querySelector("[data-search-form] input[name='q']")?.value || lastSearchQuery();
        const topic = new URLSearchParams(window.location.search).get("topic") || "All";
        return resultsContentParts(query, searchArticles(query, topic));
      }
    };
  });
}

function initHomeSummary() {
  if (document.body.dataset.page !== "home") return;
  const summary = createLiveSummary(ensureSummarySlot());
  if (!summary) return;
  const input = document.querySelector("[data-search-form] input[name='q']");
  let focusTopic = "";
  const asked = new Set();
  input?.addEventListener("input", () => {
    const value = input.value.trim();
    if (value.length < 2) {
      summary.reply({ parts: null, ask: "ask", offers: [] });
      return;
    }
    summary.reply({
      parts: [plain("You’re describing "), marked(clipText(value, 80)), plain(".")],
      ask: "follow-up",
      offers: [{
        id: "search",
        kind: "action",
        label: `Search for “${clipText(value, 42)}”`,
        href: searchUrl(value)
      }],
      meta: "Updated from what you typed",
      phase: "drafting"
    });
  });
  document.querySelectorAll(".topic-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const name = card.querySelector("h2")?.textContent?.trim() || "";
      if (!name || name === focusTopic) return;
      focusTopic = name;
      const blurb = card.querySelector("p")?.textContent?.trim();
      const key = topicKeyFromLabel(name);
      summary.reply({
        parts: blurb ? [plain(blurb)] : [plain("Start with "), marked(name), plain(".")],
        ask: "follow-up",
        offers: [{
          id: name,
          kind: "action",
          label: key ? `Open ${name}` : "Submit a case",
          href: key ? searchUrl("", key) : "submit.html"
        }],
        meta: name,
        phase: "drafting"
      });
    });
  });
  summary.setAsk((value) => answerFreeform(value, {
    topic: topicKeyFromLabel(focusTopic),
    subject: "",
    details: value,
    reference: "",
    priority: "Normal"
  }));
  summary.setNextOffer(() => {
    if (asked.has("where")) return null;
    asked.add("where");
    return {
      id: "where",
      kind: "question",
      label: "Where should I start?",
      parts: () => [
        plain("If a refund has not shown up, open "),
        marked("Waiting on money"),
        plain(". If you asked your bank to review a charge, open "),
        marked("Bank disputes"),
        plain(".")
      ]
    };
  });
  bindHomeFloat();
}

function bindHomeFloat() {
  if (document.body.dataset.summaryPlacement !== "float") return;
  const viewport = document.querySelector(".browser-viewport");
  const slot = document.querySelector("[data-summary-slot]");
  if (!viewport || !slot) return;

  function pin() {
    const width = Math.min(420, Math.max(240, viewport.clientWidth - 48));
    slot.style.width = `${width}px`;
    slot.style.left = `${viewport.clientWidth - width - 24}px`;
    slot.style.top = `${viewport.scrollTop + viewport.clientHeight - slot.offsetHeight - 20}px`;
  }

  let ticking = false;
  function schedule() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      pin();
    });
  }

  viewport.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  if (window.ResizeObserver) new ResizeObserver(schedule).observe(slot);
  pin();
}

function chargedTwiceArticle(article) {
  const steps = article.steps.map((step) => escapeHtml(step));
  const stepList = steps
    .map(
      (step, index) =>
        `<li><button type="button" class="step-hit" data-step="${index}"><span class="step-num">${index + 1}</span><span>${step}</span></button></li>`
    )
    .join("");
  return `
    <p>You might see two charges from the same purchase on your card statement. That does not always mean you paid twice. This page explains what those lines usually are, and what happens if one of them is refunded.</p>
    <h2>Why you might see two lines</h2>
    <p>Your bank can show a pending authorization and then the final charge. It can also show a payment that did not go through, followed by one that did. Those are not two payments.</p>
    <p>You were charged twice when both lines went through for the same order and the same amount. Each one is its own payment. A line that failed, or that is still pending, is not money you paid.</p>
    <h2>What a refund does</h2>
    <p>A refund sends one of those payments back to your card. If you were charged twice, that is the extra payment, not both. You should see it on your statement in 5 to 10 business days. Your bank decides the exact day.</p>
    <p>A refund does not erase the other charge. It also does not cancel a dispute you already opened with your bank.</p>
    <h2>If you already contacted your bank</h2>
    <p>A dispute is your bank asking about one charge. It stays on that charge even if another payment for the same amount is refunded. The bank’s review and the refund are two different things.</p>
    <p>The date in a letter from your bank may not match the date you see here. Use the date on the dispute itself. A refund receipt can be part of that review, but the refund alone does not finish it.</p>
    <h2>What you can check</h2>
    <ol class="article-steps">${stepList}</ol>
    <h2>Did both charges go through?</h2>
    <p>On your statement, look at the status of each line. Pending and failed charges are not a second payment. Two posted charges for the same order are.</p>
    <h2>Is a refund on the way?</h2>
    <p>Look for a refund in the amount of the extra charge. It can take 5 to 10 business days to appear. The original charge can stay on your statement while the refund is listed separately.</p>
    <h2>Did you also ask your bank to review a charge?</h2>
    <p>That review continues on its own. A refund of the other charge does not close it. If something on this page does not match what you see, <a href="submit.html" style="color: var(--brand-navy-deep); font-weight: 600;">submit a case</a> and tell us the date and amount on your statement.</p>`;
}

function longArticleHtml(article) {
  if (article.id === "duplicate-charge") return chargedTwiceArticle(article);
  const title = escapeHtml(article.title);
  const topic = escapeHtml(article.topic);
  const snippet = escapeHtml(article.snippet);
  const steps = article.steps.map((step) => escapeHtml(step));
  const paragraphs = article.paragraphs.map((paragraph) => escapeHtml(paragraph));
  const stepBlocks = steps
    .map(
      (step, index) => `
      <h2>${index + 1}. ${step}</h2>
      <p>${step} Do this before you move on. Keep the receipt, the date, and the amount together so we can find the same charge you see.</p>
      <p>If you are unsure, stop and reread “${title}”. The date on your statement or bank letter is the one that counts.</p>`
    )
    .join("");
  return `
    ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <h2>Why the summary is the short version</h2>
    <p>${snippet} The rest of this article is the long version: what to check, what to keep, and what happens after you write in. If you only have a minute, the summary above is the part worth keeping.</p>
    <p>People usually land here after something already went wrong — a second charge, a missing refund, or a letter from the bank. Read the heading, then the summary, then come back to the section that matches where you are stuck. You do not need to finish every paragraph before you act.</p>
    <h2>What to check first</h2>
    <p>Start with the ${topic} details named in the summary. A screenshot from email helps us only if it shows the date, the amount, and the store name.</p>
    <p>If two lines on your statement look alike, compare the dates and the last four digits before you write in. Telling us about the wrong charge is the same as saying nothing about the right one.</p>
    <p>${paragraphs[0] || snippet} Write down the order id, the date on your statement, and the amount before you collect anything else. Those three facts are what the rest of the steps hang on.</p>
    <h2>Work through it in order</h2>
    <ol class="article-steps">
      ${steps
        .map(
          (step, index) =>
            `<li><button type="button" class="step-hit" data-step="${index}"><span class="step-num">${index + 1}</span><span>${step}</span></button></li>`
        )
        .join("")}
    </ol>
    ${stepBlocks}
    <h2>A full pass, not a partial one</h2>
    <p>Gather what the steps ask for before you write in. A half story is reviewed as-is. You usually cannot add a missing receipt after the case has moved on.</p>
    <p>Keep files easy to tell apart: the bank notice, the receipt, the refund email. One combined scan is harder to read than a few short files.</p>
    <p>Match what you send to what happened. Two charges need both dates and amounts. A missing refund needs the refund date. Extra files that don’t answer the question do not help.</p>
    <h2>What usually goes wrong</h2>
    <p>The date in a bank letter may not match the date you see here. Use the date on the notice you got. A late reply can turn an inquiry into a chargeback.</p>
    <p>Emailing a file does not always attach it to a review we already started. Follow the link in the request if we asked for a document. A blurry photo or a cropped edge is treated as missing.</p>
    <p>A refund does not close a bank dispute by itself. If you already have a refund of a different charge, keep that receipt. The two reviews answer different questions.</p>
    <h2>After you send it</h2>
    <p>You should get a confirmation with a case id. Keep that id. A reply goes to the email on the case, usually within one business day.</p>
    <p>If the articles still don’t cover what you are seeing, submit a case and include the order or payment id, what you already tried, and the confirmation id if you have one.</p>
    <p>Still stuck after these steps? <a href="submit.html" style="color: var(--brand-navy-deep); font-weight: 600;">Submit a case</a> and include the payment or dispute id.</p>`;
}

function initArticlePage() {
  if (document.body.dataset.page !== "article") return;
  const params = new URLSearchParams(window.location.search);
  const article = ARTICLES.find((item) => item.id === params.get("id")) || ARTICLES.find((item) => item.id === "duplicate-charge") || ARTICLES[0];
  const root = document.getElementById("article-root");
  if (!root) return;
  document.title = `${article.title} — Northline Help`;
  root.innerHTML = `
    <header class="article-head">
      <p class="article-kicker">${escapeHtml(article.path)} · Updated ${escapeHtml(article.updated)}</p>
      <h1>${escapeHtml(article.title)}</h1>
    </header>
    <div data-summary-slot></div>
    <div class="article-body">
      ${longArticleHtml(article)}
    </div>`;

  const summary = createLiveSummary(ensureSummarySlot());
  if (!summary) return;
  const questions = {
    Disputes: { id: "deadline", label: "What if I miss the bank’s deadline?", parts: () => [plain("The date on the "), marked("letter or app notice"), plain(" is the one that counts. A late reply can turn an inquiry into a chargeback.")] },
    Payouts: { id: "balance", label: "When should I see the money?", parts: () => [plain("A refund or credit usually shows in "), marked("5 to 10 business days"), plain(". Search your statement for the original store name.")] },
    Verification: { id: "email-file", label: "Can I send the file by email?", parts: () => [plain("Use the "), marked("link in the request"), plain(". A file sent only in a case is not always added to that review.")] },
    Refunds: { id: "close", label: "Does a refund close my bank dispute?", parts: () => [plain("No. The refund and the bank dispute are "), marked("two different reviews"), plain(". The bank still finishes the one you opened.")] },
    Security: { id: "codes", label: "What if I lost the recovery codes?", parts: () => [plain("A "), marked("previously trusted browser"), plain(" is faster. Otherwise we reset access after we confirm the account is yours.")] }
  };
  const articleQuestion = article.id === "duplicate-charge"
    ? {
        id: "close",
        label: "Does a refund cancel a dispute with my bank?",
        parts: () => [
          plain("No. A refund returns one payment to your card. A dispute you opened with your bank "),
          marked("stays open"),
          plain(" until the bank finishes its review.")
        ]
      }
    : null;
  const pause = armPause(summary, (asked) => {
    if (articleQuestion && !asked.has(articleQuestion.id)) {
      return { ...articleQuestion, onOpen() { asked.add(articleQuestion.id); } };
    }
    const topicQuestion = questions[article.topic];
    if (topicQuestion && !asked.has(topicQuestion.id)) {
      return { ...topicQuestion, onOpen() { asked.add(topicQuestion.id); } };
    }
    if (!asked.has("step")) {
      return {
        id: "step",
        label: "Which step matters most?",
        onOpen() { asked.add("step"); },
        parts: () => [plain("Start with your statement: which lines "), marked("actually went through"), plain(", and whether a refund is already listed.")]
      };
    }
    return null;
  });
  summary.reply({
    parts: articleContentParts(article),
    ask: "follow-up",
    offers: [],
    meta: `From this article · Updated ${article.updated}`,
    phase: "landed"
  });
  if (!/[?&]demo=1/.test(window.location.search)) pause();
  root.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll("[data-step]").forEach((other) => other.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      const index = Number(button.dataset.step);
      const follow = articleQuestion || questions[article.topic];
      summary.reply({
        parts: [plain("In this article: "), marked(article.steps[index]), plain(".")],
        ask: "follow-up",
        offers: follow ? [{ ...follow, kind: "question" }] : [],
        meta: "Updated from the step you opened",
        phase: "drafting"
      });
    });
  });
  const navBtn = document.querySelector(".nav .btn-primary");
  if (navBtn && !document.querySelector(".acct-pill")) {
    const pill = document.createElement("span");
    pill.className = "acct-pill";
    pill.innerHTML = '<i>JH</i>Jonah Hale';
    navBtn.before(pill);
  }
  window.__kaSummary = summary;
  window.__kaParts = () => articleContentParts(article);
  window.__kaCites = (parts) => /business days|Oct 31/.test(parts.map((part) => part.t).join(" "))
    ? ["refund-not-received", "refund-and-dispute"]
    : [];
  summary.setAsk((value) => {
    const q = value.toLowerCase();
    if (/refund/.test(q) && /arriv|receiv|haven|yet|where|show|missing/.test(q)) {
      const parts = [
        plain("Your refund of "),
        marked("$86.00"),
        plain(" for order "),
        marked("#1044"),
        plain(" was sent on Oct 24. It should reach your Visa ending 4417 between "),
        marked("Oct 31 and Nov 6"),
        plain(", under "),
        marked("NORTHLINE*ORDER"),
        plain(". Your bank dispute on the other charge is "),
        marked("still open"),
        plain(". Reply to your bank by "),
        marked("Nov 5"),
        plain(", and do not dispute the refunded charge.")
      ];
      parts.meta = "Read from your account · Order #1044 · just now";
      return parts;
    }
    if (articleQuestion && /refund|close|dispute/.test(q)) return articleQuestion.parts();
    const topicQuestion = questions[article.topic];
    if (topicQuestion && /deadline|hold|email|upload|refund|code|lost/.test(q)) return topicQuestion.parts();
    return articleContentParts(article);
  });
  summary.setNextOffer(() => {
    const follow = articleQuestion || questions[article.topic];
    return follow ? { ...follow, kind: "question" } : null;
  });
  bindArticleDock(summary, articleQuestion || questions[article.topic], pause);
}

function bindArticleDock(summary, suggestion, onUndock) {
  const viewport = document.querySelector(".browser-viewport");
  const slot = document.querySelector("[data-summary-slot]");
  if (!viewport || !slot) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const holder = document.createElement("div");
  holder.className = "summary-holder";
  slot.before(holder);
  holder.appendChild(slot);

  let phase = "flow";
  let fullHeight = 0;
  let cardInset = 0;
  let floater = null;
  let ticking = false;
  const dockGap = 20;

  function edgeY() {
    const header = viewport.querySelector(".site-header");
    if (header) return header.getBoundingClientRect().bottom;
    return viewport.getBoundingClientRect().top;
  }

  function pin() {
    slot.style.top = `${viewport.scrollTop + viewport.clientHeight - slot.offsetHeight - dockGap}px`;
  }

  function clearWrap() {
    slot.style.clipPath = "";
    if (floater) floater.remove();
    floater = null;
  }

  function floaterStamp() {
    return slot.querySelector(".question-btn")?.textContent || suggestion?.label || "";
  }

  function ensureFloater() {
    if (floater) return;
    floater = slot.cloneNode(true);
    floater.removeAttribute("data-summary-slot");
    floater.classList.add("summary-floater");
    floater.setAttribute("aria-hidden", "true");
    floater.inert = true;
    floater.style.clipPath = "none";
    const card = floater.querySelector(".case-assist");
    if (card) {
      card.classList.add("is-quiet");
      card.dataset.summary = "off";
    }
    const box = floater.querySelector("[data-summary-questions]");
    if (box && suggestion?.label && !box.querySelector(".question-btn")) {
      const button = document.createElement("span");
      button.className = "question-btn";
      const badge = document.createElement("span");
      badge.className = "q";
      badge.setAttribute("aria-hidden", "true");
      badge.textContent = "?";
      button.append(badge, document.createTextNode(suggestion.label));
      box.appendChild(button);
    }
    viewport.appendChild(floater);
  }

  function layoutRise(p) {
    const stamp = floaterStamp();
    if (floater && floater.dataset.stamp !== stamp) {
      floater.remove();
      floater = null;
    }
    ensureFloater();
    floater.dataset.stamp = stamp;
    const travel = floater.offsetHeight + dockGap;
    const viewBottom = viewport.scrollTop + viewport.clientHeight;
    floater.style.top = `${viewBottom - travel * p}px`;
  }

  function wrap(exited, height) {
    phase = "snake";
    const p = Math.min(1, Math.max(0, exited / height));
    slot.style.clipPath = `inset(${Math.max(0, exited)}px 0 0 0)`;
    layoutRise(p);
  }

  function dock() {
    if (phase !== "docked") {
      fullHeight = slot.offsetHeight;
      cardInset = slot.getBoundingClientRect().top - holder.getBoundingClientRect().top;
      holder.style.minHeight = `${holder.offsetHeight}px`;
      clearWrap();
      viewport.appendChild(slot);
      slot.classList.add("is-docked");
      document.body.classList.add("is-summary-docked");
      summary.collapse(suggestion);
      phase = "docked";
    }
    pin();
  }

  function release(startPause) {
    const wasDocked = phase === "docked";
    clearWrap();
    slot.classList.remove("is-docked");
    document.body.classList.remove("is-summary-docked");
    slot.style.top = "";
    holder.style.minHeight = "";
    if (slot.parentElement !== holder) holder.appendChild(slot);
    phase = "flow";
    if (wasDocked) summary.restore();
    if (startPause && wasDocked && onUndock) onUndock();
  }

  function sync() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const height = phase === "docked" ? fullHeight : slot.offsetHeight;
      if (!height) return;
      const cardTop = phase === "docked"
        ? holder.getBoundingClientRect().top + cardInset
        : slot.getBoundingClientRect().top;
      const exited = edgeY() - cardTop;

      if (reduceMotion) {
        if (exited >= height) dock();
        else if (phase !== "flow") release(true);
        return;
      }

      if (phase === "docked" && exited >= height - 12) {
        pin();
        return;
      }

      if (exited <= 0) {
        if (phase !== "flow") release(true);
        return;
      }

      if (exited >= height) {
        dock();
        return;
      }

      if (phase === "docked") release(false);
      const liveTop = slot.getBoundingClientRect().top;
      const liveHeight = slot.offsetHeight;
      const again = edgeY() - liveTop;
      if (again <= 0 || !liveHeight) return;
      if (again >= liveHeight) {
        dock();
        return;
      }
      wrap(again, liveHeight);
    });
  }

  viewport.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
}

const ACTION_LABELS = {
  review: "Check a missing refund",
  remind: "Ask about a bank dispute",
  refund: "Request a refund",
  reset: "Reset two-factor"
};

function readAction(form) {
  return {
    action: form.querySelector("[name='action']")?.value || "",
    email: form.querySelector("[name='email']")?.value.trim() || "",
    reference: form.querySelector("[name='reference']")?.value.trim() || "",
    note: form.querySelector("[name='note']")?.value.trim() || ""
  };
}

function actionHasOpenDispute(draft) {
  return /dispute|bank/.test(`${draft.reference} ${draft.note}`.toLowerCase());
}

function actionParts(draft) {
  if (!draft.action) {
    return [
      plain("Pick what you want us to do. Nothing sends until you confirm. An "),
      marked("order or payment id"),
      plain(" keeps the request on the right charge.")
    ];
  }
  const parts = [plain("Ready to send "), marked(ACTION_LABELS[draft.action] || draft.action)];
  if (draft.email) parts.push(plain(" for "), marked(draft.email));
  parts.push(plain(". "));
  if (draft.action === "review") parts.push(plain("This checks why a refund or credit has not shown up. It does "), marked("not speed the bank"), plain(" on its own."));
  if (draft.action === "remind") parts.push(plain("We’ll look at the bank dispute on this charge and email you "), marked("what happens next"), plain("."));
  if (draft.action === "refund" && /1044/.test(draft.reference) && actionHasOpenDispute(draft)) {
    parts.push(
      plain("This asks us to return the extra $86 on order "),
      marked("1044"),
      plain(". It does "),
      marked("not close"),
      plain(" the dispute you opened with your bank.")
    );
  } else if (draft.action === "refund") {
    parts.push(plain("This "), marked("requests a refund"), plain(" and does not close a bank dispute you already opened."));
  }
  if (draft.action === "reset") parts.push(plain("This signs you out and "), marked("clears the authenticator"), plain("."));
  if (draft.reference) parts.push(plain(" I’ll attach "), marked(draft.reference), plain("."));
  if (draft.note.length > 8) parts.push(plain(" Note so far: “"), marked(clipText(draft.note, 90)), plain("”."));
  return parts;
}

function applyCaseHandoff(form) {
  const saved = readCaseHandoff();
  if (!saved?.action) return false;
  const fields = [
    ["action", saved.action],
    ["email", saved.email],
    ["reference", saved.reference],
    ["note", saved.note]
  ];
  let carried = false;
  fields.forEach(([name, value]) => {
    const input = form.querySelector(`[name='${name}']`);
    if (!input || !value) return;
    input.value = value;
    const field = input.closest(".field");
    const label = field?.querySelector("label");
    if (!field || !label) return;
    let tag = field.querySelector(".carry-tag");
    if (!tag) {
      tag = document.createElement("span");
      tag.className = "carry-tag";
      tag.textContent = "From your case";
      label.appendChild(tag);
    }
    const sync = () => {
      const empty = !String(input.value).trim();
      tag.hidden = empty;
    };
    input.addEventListener("input", sync);
    input.addEventListener("change", sync);
    sync();
    carried = true;
  });
  return carried;
}

function initActionPage() {
  if (document.body.dataset.page !== "action") return;
  const form = document.getElementById("action-form");
  const summary = createLiveSummary(ensureSummarySlot());
  if (!form || !summary) return;
  const carried = applyCaseHandoff(form);
  let locked = false;
  let lastKey = "";
  const asked = new Set();

  function actionShape(draft, meta) {
    const two = draft.action === "refund" && /1044/.test(draft.reference) && actionHasOpenDispute(draft);
    let parts;
    if (two) {
      parts = [plain("This asks us to return the extra $86 on order "), marked("1044"), plain(". It does "), marked("not close"), plain(" the dispute you opened with your bank.")];
    } else if (draft.action) {
      parts = [plain("Ready to send "), marked(ACTION_LABELS[draft.action] || draft.action), plain(".")];
    } else {
      parts = [plain("Pick what you want us to do. Nothing sends until you confirm.")];
    }
    const offers = [];
    if (two) {
      offers.push({
        id: "dispute",
        kind: "action",
        label: "Read about refunds and bank disputes",
        href: "article.html?id=refund-and-dispute"
      });
      offers.push({
        id: "now",
        kind: "question",
        label: "Does this close my bank dispute?",
        parts: () => [plain("No. The extra $86 usually shows back on your card in "), marked("5 to 10 business days"), plain(". The dispute you opened with your bank "), marked("stays open"), plain(" until the bank finishes.")],
        onOpen() { asked.add("now"); }
      });
    } else {
      const specific = {
        review: { id: "release", label: "Will this make the refund show up today?", parts: () => [plain("No. This checks why it is missing. Credits still take "), marked("5 to 10 business days"), plain(" after they are sent.")] },
        remind: { id: "who", label: "Who hears back?", parts: () => [plain("We’ll email "), marked("the address on this form"), plain(" about the bank dispute on this charge.")] },
        refund: { id: "now", label: "When will I see the refund?", parts: () => [plain("The request sends now. The card usually shows it in "), marked("5 to 10 business days"), plain(".")] },
        reset: { id: "signout", label: "Will I be signed out?", parts: () => [plain("Yes. Every session ends, and you need "), marked("a new authenticator"), plain(" to get back in.")] }
      }[draft.action] || { id: "safe", label: "Does anything send before I confirm?", parts: () => [plain("No. "), marked("Submit request"), plain(" is the only control that sends it.")] };
      offers.push({ ...specific, kind: "question", onOpen() { asked.add(specific.id); } });
    }
    summary.reply({ parts, ask: "follow-up", offers, meta, phase: "drafting" });
  }

  function refresh() {
    if (locked) return;
    const draft = readAction(form);
    const key = [draft.action, draft.email, draft.reference, draft.note].join("\u0001");
    if (key === lastKey) return;
    lastKey = key;
    actionShape(draft, draft.action ? "Updated from this action" : "Based on this form · just now");
  }

  actionShape(readAction(form), carried ? "Filled from your case" : "Based on this form · just now");
  let inputTimer = 0;
  form.querySelector("[name='action']")?.addEventListener("change", refresh);
  ["email", "reference", "note"].forEach((name) => {
    form.querySelector(`[name='${name}']`)?.addEventListener("input", () => {
      window.clearTimeout(inputTimer);
      inputTimer = window.setTimeout(refresh, 650);
    });
  });
  summary.setAsk((value) => {
    const draft = readAction(form);
    const q = value.toLowerCase();
    if (/close|cancel|dispute/.test(q) && draft.action === "refund") {
      return [plain("No. Requesting a refund of "), marked(draft.reference || "this charge"), plain(" does not close a dispute you opened with your bank.")];
    }
    if (/release|hold|friday|payout/.test(q)) {
      return [plain("A refund does "), marked("not close a bank dispute"), plain(". Your bank finishes that review on its own.")];
    }
    if (/refund/.test(q)) return [plain("A refund "), marked("does not close a bank dispute"), plain(" on that charge.")];
    if (/sign|authenticator|reset/.test(q)) return [plain("A reset "), marked("signs you out"), plain(" of every session.")];
    return [plain("On “"), marked(clipText(value, 72)), plain(".")];
  });
  summary.setNextOffer(() => {
    if (asked.has("safe")) return null;
    asked.add("safe");
    return {
      id: "safe",
      kind: "question",
      label: "Does anything send before I confirm?",
      parts: () => [plain("No. "), marked("Submit request"), plain(" is the only control that sends it.")]
    };
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (locked) return;
    let valid = true;
    const issues = [];
    form.querySelectorAll("[data-required]").forEach((field) => {
      const control = field.querySelector("input, select, textarea");
      const value = control.value.trim();
      let message = "";
      if (!value) message = "This field is required.";
      else if (control.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter a valid email.";
      field.classList.toggle("is-invalid", Boolean(message));
      const error = field.querySelector(".error");
      if (error) error.textContent = message;
      if (message) {
        valid = false;
        issues.push(field.querySelector("label")?.textContent || "This field");
      }
    });
    if (!valid) {
      summary.reply({
        parts: [plain("Before this can run, add "), marked(issues.join(" and ")), plain(".")],
        ask: "follow-up",
        meta: "Checked the form",
        phase: "drafting"
      });
      form.querySelector(".is-invalid input, .is-invalid select, .is-invalid textarea")?.focus();
      return;
    }
    const draft = readAction(form);
    const runId = `ACT-${Math.floor(10000 + Math.random() * 89999)}`;
    locked = true;
    summary.reply({
      parts: [
        plain(`${ACTION_LABELS[draft.action]} is in for `),
        marked(draft.email),
        plain(". Your confirmation is "),
        marked(runId),
        plain(draft.reference ? `. Order ${draft.reference} is attached.` : ".")
      ],
      ask: "hidden",
      offers: [],
      meta: `Action ${runId}`,
      phase: "submitted"
    });
    const card = document.getElementById("action-card");
    const refunding = draft.action === "refund";
    const delay = window.__actionDelay ?? 2400;
    card.innerHTML = `
      <div class="result">
        <h2>${refunding ? "Processing your refund" : "Processing your request"}</h2>
        <p>${refunding
          ? `Checking order ${escapeHtml(draft.reference || "")} and sending $86.00 back to your card.`
          : `${escapeHtml(ACTION_LABELS[draft.action])} for ${escapeHtml(draft.email)}.`}</p>
        <div class="result-bar" style="--wait: ${delay}ms"><i></i></div>
      </div>`;
    window.setTimeout(() => {
      card.innerHTML = `
        <div class="result">
          <h2>${refunding ? "$86.00 refunded" : "Request sent"}</h2>
          <p>${refunding
            ? `Order ${escapeHtml(draft.reference || "")} · back on your card in 5 to 10 business days.`
            : `${escapeHtml(ACTION_LABELS[draft.action])} is in for ${escapeHtml(draft.email)}.`}</p>
          <p class="result-ref">Confirmation ${runId}</p>
          <div class="success-actions">
            <a class="btn-secondary" href="index.html">Back to help center</a>
            <button type="button" class="btn-primary" id="another-action">Send another</button>
          </div>
        </div>`;
      document.getElementById("another-action").addEventListener("click", () => window.location.reload());
    }, delay);
  });
}

mountTabs();
initSearchForms();
initHome();
initHomeSummary();
initSearchPage();
initArticlePage();
initBlueprintPage();
initActionPage();
initSubmit();
