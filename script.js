// GANTI nomor berikut dengan nomor WhatsApp bisnis Anda, gunakan kode negara tanpa tanda +.
const WHATSAPP_NUMBER = "6281234567890";
const DEFAULT_MESSAGE = "Halo RuangSablon, saya ingin konsultasi kaos custom. Boleh minta informasi lebih lanjut?";

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
document.querySelector("#wa-link").href = waUrl;
document.querySelector("#floating-wa").href = waUrl;
document.querySelector("#year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.textContent = isOpen ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  });
});
