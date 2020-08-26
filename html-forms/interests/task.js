"use strict";

const interests = document.querySelector("div.interests_main");
const food = interests.firstElementChild.firstElementChild;
const animals = interests.lastElementChild.lastElementChild;
const foodCheckbox = food.querySelector("input.interest__check");
const animalsCheckbox = animals.querySelector("input.interest__check");
const kindsOfFood = food.querySelector("ul.interests_active").querySelectorAll("input.interest__check");
const kindsOfAnimals = animals.querySelector("ul.interests_active").querySelectorAll("input.interest__check");

function checkAll() {
  for (let kindOfFood of kindsOfFood) {
    if (foodCheckbox.checked === true) {
      kindOfFood.checked = true;
    } else {
      kindOfFood.checked = false;
    }
  }
  for (let kindOfAnimal of kindsOfAnimals) {
    if (animalsCheckbox.checked === true) {
      kindOfAnimal.checked = true;
    } else {
      kindOfAnimal.checked = false;
    }
  }
}

foodCheckbox.onchange = () => checkAll();
animalsCheckbox.onchange = () => checkAll();

