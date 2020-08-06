const text = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const speed = document.getElementById("speed__counter");
let lastClick = 0;
image.onclick = function () {
  text.textContent++;
  if (image.width === 200) {
    image.width = 100;
    image.height = 100;
  } else {
    image.width = 200;
    image.height = 200;
  }
  let now = new Date();
  speed.textContent = (1 / ((now - lastClick) / 1000)).toFixed(2);
  lastClick = now;
};

