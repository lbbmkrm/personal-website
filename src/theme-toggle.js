// Gets theme preference from local storage or system settings.
function getThemePreference() {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Sets the theme on the document and in local storage.
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    updateThemeIcon("dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    updateThemeIcon("light");
  }
}

// Updates the theme toggle icons.
function updateThemeIcon(theme) {
  const themeToggleIcon = document.querySelector(
    "#theme-toggle .material-icons"
  );
  const themeToggleMobileText = document.querySelector(
    "#theme-toggle-mobile span:last-child"
  );

  if (theme === "dark") {
    themeToggleIcon.textContent = "light_mode";
    themeToggleMobileText.textContent = "light_mode";
  } else {
    themeToggleIcon.textContent = "dark_mode";
    themeToggleMobileText.textContent = "dark_mode";
  }
}

// Initialize theme on page load.
document.addEventListener("DOMContentLoaded", () => {
  const theme = getThemePreference();
  setTheme(theme);

  // Add event listeners for theme toggles.
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "light" : "dark");
      const mobileMenu = document.getElementById("mobile-menu");
      const menuIcon = document.getElementById("menu-icon");
      mobileMenu.classList.add("hidden");
      menuIcon.textContent = "menu";
      document.body.classList.remove("overflow-hidden");
    });
  }

  // Update theme if system preference changes, but only if user hasn't set a preference.
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
});

// Initial theme setup to prevent FOUC (Flash of Unstyled Content).
const theme = localStorage.getItem("theme");
if (
  theme === "dark" ||
  (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
