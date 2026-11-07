# WorksAi APISync Studio (`worksai-apisync-studio`)

> Collaborative API testing workspace that detects OpenAPI schema drift and auto-heals test assertions.

- **Live Subdomain Application:** [https://apisync.worksai.org](https://apisync.worksai.org)
- **WorksAI Hub Specification:** [https://worksai.org/apps/worksai-apisync-studio](https://worksai.org/apps/worksai-apisync-studio)
- **Category:** B. SaaS products
- **License:** MIT (Derived from [Hoppscotch](https://github.com/hoppscotch/hoppscotch) @ `55908a7`)

## Capability Matrix
- **What You Can Do:** Diff OpenAPI route specifications against saved request collections, flag missing routes and unvalidated required fields, and generate contract test assertions.
- **Deterministic Domain Utilities:** auditOpenApiDrift (route map comparison, required field verification, and expect() assertion generator).
- **Genuine AI Model Features:** Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct) edge-case test payload synthesis and breaking-change migration notes.
- **Persisted R2/Neon Features:** OpenAPI drift reports and generated contract test suites persisted in Cloudflare R2 (workspaces/worksai-apisync-studio/*).
- **Known Limitations:** Evaluates JSON route descriptors and OpenAPI path summaries; full $ref external URL dereferencing requires pre-bundled specs.

## Verification & Local Testing
```bash
npm run lint
npm run typecheck
npm test
```
