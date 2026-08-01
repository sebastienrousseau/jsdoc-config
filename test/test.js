const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/jsdoc-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert.strictEqual(cjsConfig.opts.encoding, "utf8");

  const esmModule = await import("../index.mjs");
  const esmConfig = esmModule.default;
  assert(esmConfig && typeof esmConfig === "object", "ESM config must be an object");
  assert.strictEqual(esmConfig.opts.encoding, "utf8");

  console.log("✅ jsdoc-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
