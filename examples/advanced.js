/**
 * Advanced JSDoc custom destination configuration
 */
const base = require("../index.cjs");
const custom = { ...base, opts: { ...base.opts, destination: "./public/docs" } };
console.log("Custom destination:", custom.opts.destination);
