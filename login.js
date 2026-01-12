// login.js

// Simulasi key owner / key valid
const validKey = "/.vinxxsevto";

// Tombol
const loginBtn = document.getElementById("login-btn");
const buyBtn = document.getElementById("buy-btn");

// Event tombol login
loginBtn.addEventListener("click", () => {
    const inputKey = prompt("Enter your access key:");
    if (inputKey === validKey) {
        alert("Access Granted! Welcome owner.");
        // Simpan info login ke localStorage (buat tes HP member)
        localStorage.setItem("loggedIn", "true");
        // Bisa redirect ke halaman console.html
        window.location.href = "console.html";
    } else {
        alert("Invalid key!");
    }
});

// Tombol Buy Access
buyBtn.addEventListener("click", () => {
    alert("Please contact the owner to get your key.");
});
