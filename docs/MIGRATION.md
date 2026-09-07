# Migration Guide for `@sebastienrousseau/jsdoc-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/jsdoc-config`.

## Upgrading from Previous Versions

1. Update package version:
   ```bash
   npm install --save-dev @sebastienrousseau/jsdoc-config@latest
   ```
2. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/jsdoc-config` in your `package.json` or config entrypoint.
