const competitionTimer = function () {
  const seconds = document.getElementById("timer");
  seconds.textContent -= 1;
};
setInterval(competitionTimer, 1000);
setTimeout(() => {clearInterval(competitionTimer); alert("Вы победили в конкурсе!");}, 60000);
