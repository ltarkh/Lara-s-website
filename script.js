/* =========================================================
   Lara Tarkh — site interactions
   Theme toggle · mobile menu · navbar shadow · bibtex toggles
   ========================================================= */
(function () {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  /* ---------- Theme (persisted, respects OS preference) ---------- */
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      const icon = themeToggle.querySelector("i");
      if (icon) icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  const stored = localStorage.getItem("theme");
  const prefersLight =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(stored || (prefersLight ? "light" : "dark"));

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      const open = navLinks.classList.contains("open");
      menuBtn.innerHTML = open
        ? '<i class="fas fa-xmark"></i>'
        : '<i class="fas fa-bars"></i>';
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  /* ---------- Navbar shadow on scroll ---------- */
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const onScroll = function () {
      navbar.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- BibTeX show/hide (publications page) ---------- */
  document.querySelectorAll(".bibtex-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const entry = btn.closest(".pub-entry");
      const block = entry && entry.querySelector(".bibtex-block");
      if (block) {
        const open = block.classList.toggle("open");
        btn.textContent = open ? "Hide BibTeX" : "BibTeX";
      }
    });
  });
})();
