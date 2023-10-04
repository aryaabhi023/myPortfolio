const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const logo = document.getElementById("logo");
const isDarkMode = localStorage.getItem("darkMode") === "enabled";
if (isDarkMode) {
  body.classList.add("dark-mode");
  logo.classList.remove("logo-dark");
  darkModeToggle.checked = true;
}
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    logo.classList.remove("logo-dark");
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    logo.classList.add("logo-dark");
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
