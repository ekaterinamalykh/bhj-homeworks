const deadMoles = document.getElementById("dead");
const lostMoles = document.getElementById("lost");
const firstHole = document.getElementById("hole1");
const classHoles = firstHole.className;
firstHole.onclick = function () {
  if (firstHole.className.includes("hole_has-mole")) {
    deadMoles.textContent++;
  } else {
    lostMoles.textContent++;
  }
  if (deadMoles.textContent == 10) {
    alert("Победа!");
    deadMoles.textContent = 0;
  }
  if (lostMoles.textContent == 5) {
    alert("Поражение!");
    lostMoles.textContent = 0;
  }
};


// let timer = setInterval(firstHole.onclick);
// if (deadMoles.textContent == 10 || lostMoles.textContent == 5) {
//   clearInterval(timer);
// }

// const deadMoles = document.getElementById("dead");
// const lostMoles = document.getElementById("lost");
// const hole = document.getElementById(`hole${index}`);
// hole.onclick = function () {
//   if (hole.className.includes("hole_has-mole")) {
//     deadMoles.textContent++;
//   } else {
//     lostMoles.textContent++;
//   }
//   if (deadMoles.textContent == 10) {
//     alert("Победа!");
//     deadMoles.textContent = 0;
//   }
//   if (lostMoles.textContent == 5) {
//     alert("Поражение!");
//     lostMoles.textContent = 0;
//   }
// };


