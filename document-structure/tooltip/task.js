const tooltips = document.getElementsByClassName("has-tooltip");

function showTip() {
  event.preventDefault();
  this.insertAdjacentHTML("afterEnd", "<div class='tooltip'></div>");
  this.nextElementSibling.classList.add('tooltip_active');
  this.nextElementSibling.textContent = this.title;
  let coords = this.getBoundingClientRect();
  this.nextElementSibling.style.left = coords.left + "px";
}

for (let tooltip of tooltips) {
  tooltip.addEventListener("click", showTip); 
}

