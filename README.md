<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./jsdoc-config.svg" alt="jsdoc-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/jsdoc-config</h1>

<p align="center">
  Shareable JSDoc documentation generator configuration files and rules adhering to modern standards.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/jsdoc-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/jsdoc-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/jsdoc-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fjsdoc-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/jsdoc-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/jsdoc-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/jsdoc-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Structured API Documentation](#structured-api-documentation) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/jsdoc-config

# pnpm
pnpm add -D @sebastienrousseau/jsdoc-config

# yarn
yarn add -D @sebastienrousseau/jsdoc-config

# bun
bun add -d @sebastienrousseau/jsdoc-config
```

---

## Quick Start

### In `package.json`

```json
{
  "jsdoc": "@sebastienrousseau/jsdoc-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/jsdoc-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/jsdoc-config";
export default config;
```

---

## Structured API Documentation

Generates clean markdown-aware API documentation with monospace links and clear navigation.

### Before (Unstandardized)

```javascript
/** function add */
function add(a, b) { return a + b; }
```

### After (@sebastienrousseau/jsdoc-config Enforced)

```javascript
/**
 * Adds two numbers together.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) { return a + b; }
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/jsdoc-config.git
cd jsdoc-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
