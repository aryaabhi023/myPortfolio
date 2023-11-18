const darkModeToggle = document.getElementById("darkModeToggle");
const changer = document.getElementById("changer");
const body = document.body;
const logo = document.getElementById("logo");
const isDarkMode = localStorage.getItem("darkMode") === "enabled";
if (isDarkMode) {
  body.classList.add("dark-mode");
  changer.classList.remove("bxs-sun");
  changer.classList.add("bxs-moon");
  logo.classList.remove("logo-dark");
  darkModeToggle.checked = true;
}
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    changer.classList.remove("bxs-sun");
    changer.classList.add("bxs-moon");
    logo.classList.remove("logo-dark");
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    changer.classList.remove("bxs-moon");
    changer.classList.add("bxs-sun");
    logo.classList.add("logo-dark");
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
