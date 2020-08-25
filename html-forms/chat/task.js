"use strict";

const widget = document.querySelector("div.chat-widget");

function openWidget() {
  this.classList.add("chat-widget_active");
}
widget.addEventListener("click", openWidget);

const messagePlace = document.getElementById("chat-widget__input");
const messages = document.querySelector( '.chat-widget__messages' );

messagePlace.addEventListener("keyup", function(e) {
  if (e.keyCode === 13 && messagePlace.value.length > 0) {
    let time = new Date().toLocaleTimeString().slice(0,-3);
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">
          ${messagePlace.value}
        </div>
      </div>
    `;
    messagePlace.value = "";
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">
          ${getRobotMessages()}
        </div>
      </div>
    `;
  }
  
})

function getRobotMessages() {
  const robotMessages = [
    'Добрый день!',
    'До свидания!',
    'Подождите минут 30',
    'Ну что вам надо?',
    'Все операторы заняты',
    'Я вам не справочная'
    ],
    index = Math.floor(Math.random() * robotMessages.length);
  return robotMessages[index];
}



