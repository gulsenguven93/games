const searchElem = document.getElementById("search");
const card = document.getElementById("card");
const gameCardElem = document.getElementsByClassName("game-card");
let gamesElem = document.querySelectorAll(".has-url");
let checkBoxElem = document.querySelectorAll(".checkbox-input");
let selectEl = document.getElementById("select");

let newGames = [...gamesElem];

selectEl = document.addEventListener("click", (event) => {
  let res = event.target.value;
  generateComp(res, "select");
});

//Checkbox CheckIslemi

checkBoxElem = document.addEventListener("change", (event) => {
  if (event.target.checked) {
    generateComp(event.target.value.toLowerCase(), "checkbox");
  } else {
    generateComp("", "checkbox");
  }
});

// Search Islemi

searchElem = document.addEventListener("keyup", (event) => {
  generateComp(event.target.value);
});

//comp = component
function generateComp(filterVal, type = "search") {
  let filterGames = [];
  if (type === "checkbox") {
    filterGames = newGames?.filter((item) => {
      if (item.name.toLowerCase().includes(filterVal.toLowerCase())) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  } else if (type === "select") {
    if (filterVal === "A-Z") {
      filterGames = newArr?.sort((a, b) => a.innerHTML - b.innerHTML);
    } else {
      filterGames = newArr?.sort((a, b) => b.innerHTML - a.innerHTML);
    }
  } else {
    filterGames = newGames?.filter((item) => {
      if (item.innerHTML.toLowerCase().includes(filterVal.toLowerCase())) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  if (filterVal.length == 0) {
    allShow(filterGames);
    //card.appendChild(gameCardElem[0]);
  }
}

function allShow(filterGames) {
  for (let i = 0; i < filterGames.length; i++) {
    filterGames[i].style.display = "block";
  }
}
