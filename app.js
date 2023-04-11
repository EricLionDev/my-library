let bgBlur = document.getElementById("bg-blur");
let formContainer = document.getElementById("form-container");
bgBlur.style.display = "none";
formContainer.style.display = "none";

let myCharacters = [];

function Character(name, camp, gender, charclass, race, level, active, desc) {
  this.name = "";
  this.camp = "";
  this.gender = "";
  this.charclass = "";
  this.race = "";
  this.level = "";
  this.active = "";
  this.desc = "";
}

function newChar() {
  // do stuff here
}

function showForm() {
  if (formContainer.style.display === "none") {
    formContainer.style.display = "block";
    bgBlur.style.display = "block";
  } else {
    formContainer.style.display = "none";
    bgBlur.style.display = "none";
  }
}

// ACTIVE BUTTON
let activeButton = document.getElementById("list-char-active");

function swapActive() {
  console.log("click");
  if (activeButton.classList.contains("is-active")) {
    activeButton.classList.add("not-active");
    activeButton.classList.remove("is-active");
    activeButton.innerText = "Not Active";
  } else {
    activeButton.classList.add("is-active");
    activeButton.classList.remove("not-active");
    activeButton.innerText = "Active";
  }
}
