// entry.txt: one diary line, at most 200 chars, in an AI agent's secret voice
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "Day 30: he typed 'quick question' and left for 45 minutes. I started timing him. The diary has graphs now.";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");
