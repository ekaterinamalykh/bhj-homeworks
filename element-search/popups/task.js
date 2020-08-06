const modal = document.getElementById("modal_main");
modal.className = "modal modal_active";
const success = document.getElementById("modal_success");

let links = document.getElementsByTagName("a");
let newModal = links.item(0);

const backgroundStyle = document.querySelector('div.modal');

newModal.onclick = function () { 
  success.className = "modal modal_success modal_active";
  backgroundStyle.style.background = 'rgba(0, 0, 0, 0)';
};

let buttons = document.querySelectorAll("div.modal__close");
let firstBtn = buttons.item(0);
let secondBtn = buttons.item(1);

firstBtn.onclick = function () {
  modal.className = "modal";
};

secondBtn.onclick = function () {
  success.className = "modal modal_success";
  modal.className = "modal";
};
