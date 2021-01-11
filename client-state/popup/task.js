const modal = document.getElementById("subscribe-modal");
const button = document.getElementsByClassName("modal__close")[0];

button.onclick = () => {
  modal.className = "modal";
  document.cookie = "className=modal; expires=Tue, 19 Jan 2038 03:14:07 GMT";
}

window.onload = () => {
  if (!document.cookie.split('; ').find(row => row.startsWith('className'))) {
    modal.className = "modal modal_active";
  } else {
    modal.className = "modal";
  }
}