const deadMoles = document.getElementById("dead");
const lostMoles = document.getElementById("lost");
const holes = document.getElementsByClassName("hole");

for (let i = 0; i < holes.length; i++) {
  holes[i].onclick = function () {
    if (holes[i].className.includes("hole_has-mole")) {
      deadMoles.textContent++;
    } else {
      lostMoles.textContent++;
    }
    if (deadMoles.textContent == 10) {
      alert("Победа!");
      deadMoles.textContent = 0;
      lostMoles.textContent = 0;
    }
    if (lostMoles.textContent == 5) {
      alert("Поражение!");
      lostMoles.textContent = 0;
      deadMoles.textContent = 0;
    }
  };
}


