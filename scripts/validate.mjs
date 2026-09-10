// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

// Does the real JSDoc accept what this package exports?
//
// Two things get in the way of pointing JSDoc straight at index.cjs. Its -c
// flag treats anything that is not a .js file as JSON, so a .cjs module is
// parsed as JSON and fails on the licence header; and the shipped config
// documents a src/ tree, which this package — being configuration, not a
// library with sources — does not have.
//
// So the check materialises the exported object (the same object require()
// hands a consumer) and runs JSDoc over a probe tree shaped the way that
// configuration says a project is shaped. The question is whether the tool
// accepts the configuration, not whether this repository has a src/.

import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";

const config = createRequire(import.meta.url)("../index.cjs");

const dir = mkdtempSync(join(tmpdir(), "jsdoc-config-"));
mkdirSync(join(dir, "src"), { recursive: true });
writeFileSync(
  join(dir, "src", "probe.js"),
  "/** Answer. @returns {number} The answer. */\nexport function answer() {\n  return 1;\n}\n",
);
writeFileSync(join(dir, "README.md"), "# Probe\n");
writeFileSync(join(dir, "jsdoc.json"), JSON.stringify(config, null, 2));

// -X dumps the parsed doclets and exits: the whole configuration pipeline
// runs, including plugins and tag dictionaries, without writing a site.
execFileSync("jsdoc", ["-c", "jsdoc.json", "-X"], {
  cwd: dir,
  stdio: ["ignore", "ignore", "inherit"],
  // On Windows the bin is a .cmd shim, which Node refuses to execFile
  // directly since the CVE-2024-27980 mitigation.
  shell: process.platform === "win32",
});

process.stdout.write(`JSDoc accepted the configuration (${Object.keys(config).length} keys)\n`);
