// Theme toggle + remember preference
(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle ? themeToggle.querySelector(".theme-icon") : null;

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  } else {
    root.setAttribute("data-theme", "dark");
  }

  const applyIcon = () => {
    if (!themeIcon) return;
    const current = root.getAttribute("data-theme") || "dark";
    themeIcon.textContent = current === "dark" ? "🌙" : "☀️";
  };

  applyIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      applyIcon();
    });
  }
})();

// Mobile nav toggle
(function () {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
})();

// Footer year
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// Contact form (front-end only)
(function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill out all required fields.";
      status.style.color = "#ff5c7a";
      return;
    }

    // This is just a front-end demo. Plug into backend / API if you want real sending.
    status.textContent = "Thanks, your message has been recorded. I’ll check it.";
    status.style.color = "#3dd68c";
    form.reset();
  });
})();