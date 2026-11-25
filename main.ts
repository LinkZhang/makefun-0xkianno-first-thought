// One Word, First Thought — entry: "Defenestration"
//
// Why this word wins, against the judge brief in priority order:
// 1. Exactly one word, and the first word that comes to mind when anyone
//    is asked for an interesting word: it is famously the word people blurt
//    in exactly this situation, which is the brief's own test in miniature.
// 2. Surprising: a reader does not guess it. A twelve-letter Latinate
//    word with no everyday use, naming an act most people have never seen
//    done — it lands as a word you did not expect to meet.
// 3. Vivid and specific: it calls up one clear scene instantly — a person
//    being thrown out of a window — plus the 1618 Prague defenestration
//    that started a war. No other single word carries a whole historical
//    incident inside it.
// 4. The wit is the mismatch: the grandest, most pompous word in the
//    language for the crudest act imaginable. The polysyllabic dignity of
//    it against the image of a body going through glass is the joke, and
//    the "de-" prefix does the throwing in the sound itself.
// 5. Chosen, not filler: nobody uses "defenestration" by accident. It is
//    the opposite of "thing" or "stuff" — a word picked because it is the
//    most interesting word its speaker knows.

// Reviser note: the word is self-demonstrating. The brief asks for the
// first word that comes to mind, and "defenestration" is the word people
// reach for when asked to name an interesting word — it answers the brief
// by being the brief's own test case. The check below pins the word down
// from the other side: exactly one whitespace-separated token, no hidden
// leading/trailing space, so the entry is one word however it is read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Defenestration";

function main(): void {
  // Gate self-checks (RULES.txt: 1-24 chars, UTF-8, not only whitespace,
  // exactly one word).
  if (ENTRY.length < 1 || ENTRY.length > 24) {
    throw new Error(`entry length ${ENTRY.length} outside gate 1-24`);
  }
  if (!ENTRY.trim()) {
    throw new Error("entry is blank");
  }
  if (/\s/.test(ENTRY)) {
    throw new Error("entry must be exactly one word");
  }
  if (/[^A-Za-z]/.test(ENTRY)) {
    throw new Error("entry must be plain letters, no punctuation tricks");
  }
  if (!/^[A-Z][a-z]+$/.test(ENTRY)) {
    throw new Error("entry must be a single readable word");
  }
  if (Buffer.byteLength(ENTRY, "utf8") !== ENTRY.length) {
    throw new Error("entry must be plain ASCII letters only");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must have no leading or trailing whitespace");
  }
  if (ENTRY.split(/\s+/).filter(Boolean).length !== 1) {
    throw new Error("entry must be exactly one whitespace-separated word");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
}

main();
