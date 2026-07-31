// Light/dark toggle button. The initial theme itself is set by an inline
// script in <head> (before this loads) to avoid a flash of the wrong theme;
// this file just renders the button and handles switching + persistence.
(function () {
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateButton(theme);
  }

  var btn;
  function updateButton(theme) {
    if (!btn) return;
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    var label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }

  function init() {
    btn = document.createElement("button");
    btn.id = "theme-toggle";
    btn.type = "button";
    updateButton(currentTheme());
    btn.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
    document.body.appendChild(btn);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
