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

const showDialog = document.getElementById("new-card-button");
const newDialog = document.getElementById("new-card");
const closeBtn = document.getElementById('close');

showDialog.addEventListener("click", () => {
  newDialog.showModal();
});

closeBtn.addEventListener('click', () =>{
  newDialog.close()
})

// newDialog.addEventListener("close", () => {
//   outputBox.value = `ReturnValue: ${newDialog.returnValue}.`;
// });

