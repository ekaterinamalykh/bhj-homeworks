"use strict";

const sliders = document.querySelectorAll("div.slider__item");
const arrows = document.querySelectorAll("div.slider__arrow");
const slidersArr = Array.from(sliders);
const arrowsArr = Array.from(arrows);

for (let arrow of arrowsArr) {
  arrow.onclick = function () {
    for (let i = 0; i < slidersArr.length; i++) {
      slidersArr[i].classList.toggle("slider__item_active");
    }
  };
}



    

