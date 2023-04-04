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

// Dit is een if statment, als het bestaat voer het dan uit
if ("showModal" in document.createElement("dialog")) {
  // zijn de elementen
  const showDialog = document.getElementById("new-card-button");
  const newCard = document.getElementById("new-card");
  const closeBtn = document.getElementById("close");

  // maakt de dialog aan
  const newDialog = document.createElement("dialog");

  // geeft de dialog css styling
  newDialog.className = "new-card-dialog";
  // zet new-card in mijn dialog
  newDialog.append(newCard);
  // plaatst mijn dialog in mijn body
  document.body.append(newDialog);

  // laat de link de dialog openen
  showDialog.addEventListener("click", (event) => {
    // laat de dialog openen
    newDialog.showModal();
    // zorcht er voor dat de link niet meer werkt
    event.preventDefault();
  });

  // zet hidden button aan
  closeBtn.hidden = false;
    // button sluit dialog
  closeBtn.addEventListener("click", () => {
    newDialog.close();
  });
}

