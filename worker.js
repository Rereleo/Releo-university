// Releo University worker: serves the static app and a tiny D1-backed
// sync endpoint at /api/state. No login — protected by a shared token
// (APP_PASSCODE) that the client sends automatically.

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function unauthorized() {
  return json({ error: "unauthorized" }, 401);
}

function checkAuth(request, env) {
  const passcode = request.headers.get("x-passcode") || "";
  return !!env.APP_PASSCODE && passcode === env.APP_PASSCODE;
}

async function ensureTable(env) {
  await env.DB.prepare(
    "CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at INTEGER NOT NULL)"
  ).run();
}

async function handleGetState(request, env) {
  if (!checkAuth(request, env)) return unauthorized();
  await ensureTable(env);
  const row = await env.DB.prepare(
    "SELECT value, updated_at FROM kv WHERE key = 'state'"
  ).first();
  return json({
    state: row ? JSON.parse(row.value) : null,
    updated_at: row ? row.updated_at : 0,
  });
}

async function handlePutState(request, env) {
  if (!checkAuth(request, env)) return unauthorized();
  await ensureTable(env);
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "invalid_json" }, 400);
  }
  const value = JSON.stringify(body.state || {});
  const now = Date.now();
  await env.DB.prepare(
    "INSERT INTO kv (key, value, updated_at) VALUES ('state', ?, ?) " +
      "ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at"
  )
    .bind(value, now)
    .run();
  return json({ ok: true, updated_at: now });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/state") {
      if (request.method === "GET") return handleGetState(request, env);
      if (request.method === "PUT") return handlePutState(request, env);
      return json({ error: "method_not_allowed" }, 405);
    }
    // Everything else: serve the static app (index.html, app.js, etc.)
    return env.ASSETS.fetch(request);
  },
};
