const USERNAME = "c55#/.git";
const PASSWORD = "root@999";
const KEY      = "k9k1hv8";

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const k = document.getElementById("key").value;

  if (u === USERNAME && p === PASSWORD && k === KEY) {
    localStorage.setItem("login", "true");
    location.href = "index.html"; // tampilan bug
  } else {
    alert("Login gagal. Data harus sesuai dari owner.");
  }
}
