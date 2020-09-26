const tooltips = document.getElementsByClassName("has-tooltip");
const tooltip = document.getElementsByClassName("tooltip");

for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].onclick = function() {
    event.preventDefault();
    if (tooltip.length == 0) {
      this.insertAdjacentHTML("afterEnd", "<div class='tooltip'></div>");
      this.nextElementSibling.textContent = this.title;
      this.nextElementSibling.classList.add('tooltip_active');
      let coords = this.getBoundingClientRect();
      this.nextElementSibling.style.left = coords.left + "px";
    } else {
        tooltip[0].remove();
    }
  }
}
