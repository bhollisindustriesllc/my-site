// Central place for all API calls. Point BASE_URL at your API.
// Never put secret keys in front-end code: anyone can read them.
// Route secret-bearing calls through your own backend or serverless function.
export const BASE_URL = "https://api.github.com"; // placeholder demo API

export async function api(path, { method = "GET", body, headers = {} } = {}) {
  const res = await fetch(BASE_URL + path, {
    method,
    headers: { Accept: "application/json", ...(body ? { "Content-Type": "application/json" } : {}), ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const type = res.headers.get("content-type") || "";
  return type.includes("json") ? res.json() : res.text();
}
