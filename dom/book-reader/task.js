"use strict";

const fonts = Array.from(document.querySelectorAll("a.font-size"));
const book = document.getElementById("book");

function changeFonts() {
  event.preventDefault();
  let activeFont = fonts.findIndex((item) =>
    item.className.includes("font-size_active"));
  fonts[activeFont].classList.remove("font-size_active");
  this.classList.add("font-size_active");
  if (this.dataset.size === "small") {
    book.classList.add("book_fs-small");
    book.classList.remove("book_fs-big");
  } else if (this.dataset.size === "big") {
    book.classList.add("book_fs-big");
    book.classList.remove("book_fs-small");
  } else {
    book.classList = "book";
  }
}

for (let font of fonts) {
  font.addEventListener("click", changeFonts);
}
