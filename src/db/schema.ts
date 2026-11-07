export const APP_DB_CONFIG = {
  schema: "worksai_hub",
  appSlug: "worksai-apisync-studio",
  subdomain: "apisync.worksai.org",
  mcpEndpoint: "https://apisync.worksai.org/api/mcp",
  aiEndpoint: "https://apisync.worksai.org/api/ai/analyze",
  mcpTools: ["apisync.diff_openapi", "apisync.synthesize_assertions", "apisync.scrub_env_secrets"]
} as const;
