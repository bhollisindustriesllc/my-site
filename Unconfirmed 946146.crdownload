import { api } from "./api.js";

const btn = document.getElementById("test-btn");
const out = document.getElementById("output");

btn.addEventListener("click", async () => {
  out.textContent = "Loading…";
  try {
    const data = await api("/zen");
    out.textContent = typeof data === "string" ? data : JSON.stringify(data, null, 2);
  } catch (err) {
    out.textContent = `Request failed: ${err.message}`;
  }
});
