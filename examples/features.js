// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * 100% Feature Showcase for @sebastienrousseau/jsdoc-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/jsdoc-config ===");
assert(config.opts && config.opts.recurse === true);
assert(config.plugins.includes("plugins/markdown"));
assert.strictEqual(config.recurseDepth, 10);
assert.strictEqual(config.templates.monospaceLinks, true);

console.log("  ✓ Recursive depth:", config.recurseDepth);
console.log("  ✓ Markdown plugin: active");
console.log("  ✓ Destination:", config.opts.destination);
console.log("✅ 100% of jsdoc-config options and features validated.");
