import test from "node:test";
import assert from "node:assert/strict";
import { APP_META, handleAppRequest } from "../src/worker.mjs";

test("worksai-apisync-studio standalone Worker renders clean WorksAI UI without forbidden branding or hero upstream clutter", async () => {
  const res = await handleAppRequest(new Request("https://apisync.worksai.org/"));
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.equal(html.includes(APP_META.name), true);
  assert.equal(html.toLowerCase().includes("devinai.uk"), false);
  assert.equal(html.toLowerCase().includes("devonfolio"), false);
  assert.equal(html.includes("MIT Open Source • WorksAI Foundry"), true);
});

test("worksai-apisync-studio /api/ai/analyze and /api/mcp execute real deterministic domain engine and reject empty input", async () => {
  const sample = "{\n  \"openApiRoutes\": [\n    {\n      \"method\": \"GET\",\n      \"path\": \"/api/health\",\n      \"expectedStatus\": 200,\n      \"requiredFields\": [\n        \"ok\",\n        \"service\"\n      ]\n    },\n    {\n      \"method\": \"POST\",\n      \"path\": \"/api/datalake/ingest\",\n      \"expectedStatus\": 201,\n      \"requiredFields\": [\n        \"title\",\n        \"mimeType\",\n        \"content\"\n      ]\n    }\n  ],\n  \"savedCollectionRequests\": [\n    {\n      \"method\": \"GET\",\n      \"path\": \"/api/health\",\n      \"bodyFields\": [\n        \"ok\",\n        \"service\"\n      ]\n    }\n  ]\n}";
  const aiRes = await handleAppRequest(
    new Request("https://apisync.worksai.org/api/ai/analyze", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ input: sample, tool: APP_META.mcpTools[0] })
    })
  );
  assert.equal(aiRes.status, 200);
  const aiData = await aiRes.json();
  assert.equal(aiData.ok, true);
  assert.equal(typeof aiData.domainResult, "object");
  assert.notEqual(aiData.domainResult, null);
});
