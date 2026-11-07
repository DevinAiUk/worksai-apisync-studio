# WorksAi APISync Studio (`worksai-05`)

> Collaborative API testing workspace that detects OpenAPI schema drift and auto-heals test assertions.

**Category:** B. SaaS products  
**License:** MIT (Derivative of [Hoppscotch](https://github.com/hoppscotch/hoppscotch) @ `55908a7`)  
**Portfolio Page:** `https://devinai.uk/worksai/products/worksai-apisync-studio/`

## Value Proposition & Scope
Undercuts Postman ($14-$19/user/month) while solving Hoppscotch's #1 gap—manual drift between OpenAPI specs and saved request collections—by automatically diffing schemas and generating contract assertions.

### What Works Out-of-the-Box (Zero External Credentials Required)
OpenAPI spec diffing, breaking-change detection, assertion synthesis, mock payload generation, and environment interpolation.

### What Requires User Configuration (`.env.example`)
`DATABASE_URL` (Neon Postgres) for cloud team sync; optional `OPENAI_API_KEY` for edge-case fuzz payload generation.

## Measurable Acceptance Criteria
- AC-01: Compares an OpenAPI 3.x specification against a saved request collection and accurately flags added, removed, and breaking endpoint changes.
- AC-02: Auto-generates executable JSON-schema and status-code test assertions for every route in an OpenAPI spec.
- AC-03: Blocks SSRF attempts targeting cloud metadata (`169.254.169.254`) or loopback addresses in hosted proxy mode.
- AC-04: Interpolates `{{ENV_VAR}}` placeholders and redacts sensitive auth headers when exporting shareable test reports.

## Known Limitations
- Browser-direct execution against third-party APIs without CORS headers requires enabling the bundled CORS proxy relay.
- Enterprise SAML/SCIM SSO is not included in the MIT community edition.

## Quick Start & Verification
```bash
npm test
```
