const competitionTimer = function () {
  const seconds = document.getElementById("timer");
  seconds.textContent -= 1;

  if (seconds.textContent == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(competitionTimer);
  }
};
setInterval(competitionTimer, 1000);

