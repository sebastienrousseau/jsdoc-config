---
title: "Usage — @sebastienrousseau/jsdoc-config"
description: "How to use and configure @sebastienrousseau/jsdoc-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/jsdoc-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/jsdoc-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/jsdoc-config";
export default config;
```

## In `package.json`

```json
{
  "jsdoc": "@sebastienrousseau/jsdoc-config"
}
```
