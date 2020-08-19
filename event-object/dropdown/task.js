"use strict";

const dropDownList = document.querySelector("ul.dropdown__list");
const dropDownMenu = document.querySelector("div.dropdown");
const valuesLinks = document.querySelectorAll("a.dropdown__link");
const valuesLinksArr = Array.from(valuesLinks);
const dropdown = document.querySelector("div.dropdown__value");

function dropDown() {
  dropDownList.classList.toggle("dropdown__list_active");
  event.preventDefault();
}
dropDownMenu.addEventListener("click", dropDown);

function changeItem() {
  dropdown.textContent = this.textContent;
}

for (let valueLinkArr of valuesLinksArr) {
  valueLinkArr.addEventListener("click", changeItem);
}

