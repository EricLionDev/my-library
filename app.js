let bgBlur = document.getElementById("bg-blur");
let formContainer = document.getElementById("form-container");
// bgBlur.style.display = "none";
// formContainer.style.display = "none";

let myLibrary = [];

function Character() {}

function addCharToLib() {
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
