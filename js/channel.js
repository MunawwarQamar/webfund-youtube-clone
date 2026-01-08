// Subscribe button
const btn = document.getElementById("subBtn");

if (btn) {
  btn.addEventListener("click", () => {
    const isSubscribed = btn.classList.toggle("subscribed");
    btn.textContent = isSubscribed ? "Subscribed" : "Subscribe";
    btn.setAttribute("aria-pressed", String(isSubscribed));
  });
}

// Tabs active state
const tabs = document.querySelectorAll(".tab");
tabs.forEach((t) => {
  t.addEventListener("click", (e) => {
    e.preventDefault();
    tabs.forEach((x) => x.classList.remove("active"));
    t.classList.add("active");
  });
});

// Shelf arrows (works for playlists + videos)
document.querySelectorAll(".shelf").forEach((shelf) => {
  const scroller = shelf.querySelector(".shelf-scroller");
  const leftBtn = shelf.querySelector(".shelf-arrow.left");
  const rightBtn = shelf.querySelector(".shelf-arrow.right");

  if (!scroller || !leftBtn || !rightBtn) return;

  const getStep = () => Math.max(240, Math.floor(scroller.clientWidth * 0.9));

  const updateArrows = () => {
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    const atStart = scroller.scrollLeft <= 2;
    const atEnd = scroller.scrollLeft >= maxScrollLeft - 2;

    leftBtn.classList.toggle("is-hidden", atStart);
    rightBtn.classList.toggle("is-hidden", atEnd);
  };

  leftBtn.addEventListener("click", () => {
    scroller.scrollBy({ left: -getStep(), behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    scroller.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  scroller.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);

  updateArrows();
});

// ===== Dark Mode Toggle (Sidebar) =====
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

const moonPath =
  "M21 14.5A7.5 7.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5Z";
const sunPath =
  "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm10-8a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm15.071-7.071a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM6.05 18.364a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Zm12.314 1.414a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM5.343 7.05a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 0 1 4.636 4.93l.707.707a1 1 0 0 1 0 1.414Z";

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeLabel.textContent = isDark ? "Light" : "Dark";

  const iconPath = themeToggle.querySelector("path");
  iconPath.setAttribute("d", isDark ? sunPath : moonPath);
}

// init from storage (or system preference)
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

setTheme(savedTheme ? savedTheme === "dark" : prefersDark);

themeToggle.addEventListener("click", () => {
  const isDarkNow = !document.body.classList.contains("dark");
  setTheme(isDarkNow);
});
