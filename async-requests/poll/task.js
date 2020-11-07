const xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const pollTitle = document.getElementsByClassName("poll__title")[0];
    pollTitle.textContent = xhr.response.data.title;
    const pollAnswers = document.getElementsByClassName("poll__answers")[0];
    let answers = xhr.response.data.answers;
    for (let i = 0; i < answers.length; i++) {
      pollAnswers.insertAdjacentHTML("beforeend", '<button class="poll__answer"></button>');
      pollAnswers.getElementsByClassName("poll__answer")[i].textContent = answers[i];
      let buttons = pollAnswers.getElementsByClassName("poll__answer");
      for (let button of buttons) {
        button.onclick = function () {
          alert("Спасибо, ваш голос засчитан!");
        }
      }
    }
  }
}
