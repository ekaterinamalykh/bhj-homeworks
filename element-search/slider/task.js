"use strict";

const sliders = document.querySelectorAll("div.slider__item");
const slidersArr = Array.from(sliders);
const prev = document.querySelector("div.slider__arrow_prev");
const next = document.querySelector("div.slider__arrow_next");

next.onclick = function() {
  let activeSlide = slidersArr.findIndex(item => item.className.includes("slider__item_active")); 
  slidersArr[activeSlide].className = "slider__item";
  let nextSlide = (activeSlide == slidersArr.length - 1) ? slidersArr[0] : slidersArr[activeSlide + 1];
  nextSlide.className = "slider__item slider__item_active";
}

prev.onclick = function() {
  let activeSlide = slidersArr.findIndex(item => item.className.includes("slider__item_active")); 
  slidersArr[activeSlide].className = "slider__item";
  let nextSlide = (activeSlide == 0) ? slidersArr[slidersArr.length - 1] : slidersArr[activeSlide - 1];
  nextSlide.className = "slider__item slider__item_active";
}

