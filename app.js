// onReady Equivalent
(function () {
  // Add nav item click event listener
  document.querySelectorAll(".nav-link").forEach((link, index, allLinks) => {
    link.addEventListener("click", toggleActiveNavItem);
  });

  // Watch for dark mode changes.
  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
  handleDarkModeChange(darkModePreference);
  darkModePreference.addEventListener("change", handleDarkModeChange);
})();

/**
 * Changes the currently active nav item.
 * @param {MouseEvent} event The click event of the nav item.
 */
function toggleActiveNavItem({ target }) {
  // Remove the "active" class from the currently active item.
  document.querySelector(".nav-link.active").classList.remove("active");
  // Add the "active" class to the clicked item.
  target.classList.add("active");
}

/**
 * Toggle dark mode based on the prefer-color-scheme media query.
 * @param {MediaQueryListEvent} event The change event of the prefer-color-scheme media query.
 */
function handleDarkModeChange({ matches }) {
  matches
    ? (document.querySelector("html").dataset.bsTheme = "dark")
    : (document.querySelector("html").dataset.bsTheme = "light");
}
