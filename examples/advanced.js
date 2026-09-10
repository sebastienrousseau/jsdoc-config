// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced JSDoc custom destination configuration
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  opts: { ...base.opts, destination: "./public/docs" },
};
console.log("Custom destination:", custom.opts.destination);
