const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("kk-theme", theme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav.classList.contains("open")) {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
