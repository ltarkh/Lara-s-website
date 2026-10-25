/* Lara Tarkh — site interactions: theme toggle, nav, BibTeX */
(function () {
  "use strict";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function setIcon() {
    if (!toggle) return;
    var dark = root.getAttribute("data-theme") === "dark";
    toggle.innerHTML = dark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  setIcon();

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      setIcon();
    });
  }

  /* On phones the tab row scrolls sideways: keep the current page's tab in view */
  var current = document.querySelector('.nav-tabs a[aria-current="page"]');
  if (current && current.scrollIntoView) {
    current.scrollIntoView({ block: "nearest", inline: "center" });
    window.scrollTo(0, 0);
  }

  /* BibTeX show / copy */
  document.querySelectorAll("[data-bibtex]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var block = document.getElementById(btn.getAttribute("data-bibtex"));
      if (!block) return;
      var open = block.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var block = document.getElementById(btn.getAttribute("data-copy"));
      if (!block || !navigator.clipboard) return;
      navigator.clipboard.writeText(block.textContent.trim()).then(function () {
        var old = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied';
        setTimeout(function () { btn.innerHTML = old; }, 1500);
      });
    });
  });
})();
