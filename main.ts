// The Moon Finally Answers Back — the Moon's comeback.
// The program writes the line to /output/entry.txt (1-240 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You keep howling at me like I did something. I only reflect sunlight — take it up with the Sun, he's the one with the ego.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
