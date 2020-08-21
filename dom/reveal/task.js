"use strict";

const orangeBlocksArr = Array.from(document.getElementsByClassName("reveal"));

window.onscroll = function() {
  let scrolled = document.documentElement.scrollTop;
  for (let i = 0; i < orangeBlocksArr.length; i++) {
    if (orangeBlocksArr[i].getBoundingClientRect().bottom <= scrolled && orangeBlocksArr[i].getBoundingClientRect().bottom > 0) {
      orangeBlocksArr[i].classList.add("reveal_active");
    }
  }
}