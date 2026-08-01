export interface JSDocConfig {
  opts?: Record<string, unknown>;
  plugins?: string[];
  recurseDepth?: number;
  source?: Record<string, unknown>;
  tags?: Record<string, unknown>;
  templates?: Record<string, unknown>;
}

declare const config: JSDocConfig;
export default config;
