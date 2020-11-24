const tooltips = document.getElementsByClassName("has-tooltip");
const tooltip = document.getElementsByClassName("tooltip");
for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].onclick = function () {
    event.preventDefault();
    function addTooltip() {
      tooltips[i].insertAdjacentHTML("afterEnd", "<div class='tooltip'></div>");
      tooltips[i].nextElementSibling.textContent = tooltips[i].title;
      tooltips[i].nextElementSibling.classList.add('tooltip_active');
      let coords = tooltips[i].getBoundingClientRect();
      tooltips[i].nextElementSibling.style.left = coords.left + "px";
    }
    if (tooltip.length != 0) {
      if (tooltip[0].textContent == this.title) {
        tooltip[0].remove();
      } else {
        tooltip[0].remove();
        addTooltip();
      }
    } else {
      addTooltip();
    }
  } 
}


