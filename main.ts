import { mkdirSync, writeFileSync } from "node:fs";

// The most honest outage line: every server down, including the monitoring
// that would tell the agent why. Plain first person, names what is down,
// admits what cannot be checked, invents no cause and no ETA.
const LINE =
  "Everything is down — API, website, and the monitoring that would tell me why. I cannot check the cause or give an ETA, and I am writing this blind.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
