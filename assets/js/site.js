// Small helpers shared by all pages.

function copyText(text, btn, label) {
  function done() {
    btn.textContent = "Copied!";
    setTimeout(function () { btn.textContent = label; }, 1500);
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done);
  } else {
    var t = document.createElement("textarea");
    t.value = text; document.body.appendChild(t); t.select();
    document.execCommand("copy"); document.body.removeChild(t); done();
  }
}

// Email: copy to clipboard instead of opening a mail app
var copyEmail = document.getElementById("copy-email");
if (copyEmail) {
  copyEmail.addEventListener("click", function () {
    copyText(document.getElementById("email-address").textContent.trim(), copyEmail, "Copy");
  });
}

// BibTeX: show/hide the citation block, and copy it
document.querySelectorAll(".bibtex-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var box = document.getElementById(btn.getAttribute("aria-controls"));
    var open = box.hidden;
    box.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  });
});
document.querySelectorAll(".bibtex-copy").forEach(function (btn) {
  btn.addEventListener("click", function () {
    copyText(btn.parentElement.querySelector("pre").textContent.trim(), btn, "Copy");
  });
});

// Light/dark toggle: defaults to the OS setting; a click overrides it and is remembered
(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  var root = document.documentElement;
  var osDark = window.matchMedia("(prefers-color-scheme: dark)");
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : osDark.matches;
  }
  function refresh() {
    var dark = isDark();
    btn.classList.toggle("is-dark", dark);
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    refresh();
  });
  // If the visitor hasn't chosen, keep following the OS live
  osDark.addEventListener("change", refresh);
  refresh();
})();
