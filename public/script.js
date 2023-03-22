let menu = document.querySelector("#menu");
let nav = document.querySelector("nav");
let socialmedia = document.querySelector("#socialmedia");

menu.addEventListener("click", () => {
  console.log(nav.classList);
  nav.classList.toggle("open-menu");
  socialmedia.classList.toggle("open-menu");
});

let modeSwitch = document.getElementById("mode");
let savedtheme = localStorage.getItem("theme");

if (savedtheme === "dark") {
  modeSwitch.checked = true;
  document.documentElement.setAttribute("data-theme", savedtheme);
}

modeSwitch.addEventListener("click", function () {
  // modeSwitch.checked ? setTheme("dark") : setTheme("");
  if (modeSwitch.checked) {
    setTheme("dark");
  } else {
    setTheme();
  }
});

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

const showDialog = document.getElementById("filter");
const favDialog = document.getElementById("favDialog");

showDialog.addEventListener("click", () => {
  favDialog.showModal();
});

favDialog.addEventListener("close", () => {
  outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});

