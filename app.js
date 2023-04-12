let bgBlur = document.getElementById("bg-blur");
let formContainer = document.getElementById("form-container");
bgBlur.style.display = "none";
formContainer.style.display = "none";

let myCharacters = [];

function Character(name, camp, gender, charclass, race, level, active, desc) {
  this.name = name;
  this.camp = camp;
  this.gender = gender;
  this.charclass = charclass;
  this.race = race;
  this.level = level;
  this.active = active;
  this.desc = desc;
}

function newChar() {
  let nextChar = new Character(
    document.getElementById("characterName").value,
    document.getElementById("campaignName").value,
    document.getElementById("characterGender").value,
    document.getElementById("characterClass").value,
    document.getElementById("characterRace").value,
    document.getElementById("characterLevel").value,
    document.getElementById("characterActive").value,
    document.getElementById("characterDesc").value
  );

  // add char to list
  myCharacters.push(nextChar);
  // reset form
  document.getElementById("new-char-form").reset();
  // log current char, and list of chars
  console.log(nextChar);
  console.log(myCharacters);
  // render the list of characters and display them on the page
  renderList();
}

function renderList() {
  let containerList = document.querySelectorAll("#info-container");
  let lastElement = containerList[containerList.length - 1];

  // create container
  let containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "info-container");

  // set name
  let namePara = document.createElement("p");
  namePara.setAttribute("id", "list-char-name");
  namePara.textContent = `${myCharacters[myCharacters.length - 1].name}`;
  containerDiv.appendChild(namePara);

  // set campaign name
  let campPara = document.createElement("p");
  campPara.setAttribute("id", "list-char-camp");
  campPara.textContent = `${myCharacters[myCharacters.length - 1].camp}`;
  containerDiv.appendChild(campPara);

  // set character gender
  let genderPara = document.createElement("p");
  genderPara.setAttribute("id", "list-char-gender");
  genderPara.textContent = `${myCharacters[myCharacters.length - 1].gender}`;
  containerDiv.appendChild(genderPara);

  // set character level
  let levelPara = document.createElement("p");
  levelPara.setAttribute("id", "list-char-lvl");
  levelPara.textContent = `${myCharacters[myCharacters.length - 1].level}`;
  containerDiv.appendChild(levelPara);

  // set character race
  let racePara = document.createElement("p");
  racePara.setAttribute("id", "list-char-race");
  racePara.textContent = `${myCharacters[myCharacters.length - 1].race}`;
  containerDiv.appendChild(racePara);

  // set character class
  let classPara = document.createElement("p");
  classPara.setAttribute("id", "list-char-class");
  classPara.textContent = `${myCharacters[myCharacters.length - 1].charclass}`;
  containerDiv.appendChild(classPara);

  // set character desc
  let descPara = document.createElement("p");
  descPara.setAttribute("id", "list-char-description");
  descPara.textContent = `${myCharacters[myCharacters.length - 1].desc}`;
  containerDiv.appendChild(descPara);

  // buttons
  let bottomBtns = document.createElement("div");
  bottomBtns.setAttribute("id", "bottom-btns");
  containerDiv.appendChild(bottomBtns);

  // active button
  let activeBtn = document.createElement("button");
  activeBtn.setAttribute("id", "list-char-active");
  activeBtn.setAttribute("onclick", "swapActive()");
  bottomBtns.appendChild(activeBtn);

  if (myCharacters[myCharacters.length - 1].active == "Yes") {
    activeBtn.classList.add("is-active");
    activeBtn.textContent = "Active";
  } else {
    activeBtn.classList.add("not-active");
    activeBtn.textContent = "Not Active";
  }

  // delete button
  let deleteBtn = document.createElement("button");
  let deleteIcon = document.createElement("span");
  deleteBtn.setAttribute("id", "delete-btn");
  bottomBtns.appendChild(deleteBtn);
  deleteIcon.classList.add("material-symbols-outlined");
  deleteIcon.textContent = "delete";
  deleteBtn.appendChild(deleteIcon);

  // put new elements in html doc
  lastElement.insertAdjacentElement("afterend", containerDiv);
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

// show / hide form
function showForm() {
  if (formContainer.style.display === "none") {
    formContainer.style.display = "block";
    bgBlur.style.display = "block";
  } else {
    formContainer.style.display = "none";
    bgBlur.style.display = "none";
  }
}
