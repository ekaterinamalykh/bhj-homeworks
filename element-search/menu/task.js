const links = document.getElementsByClassName("menu__link");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    if (links[i].nextElementSibling.classList.contains("menu_sub")) {
      event.preventDefault();
      const dropDownMenu = links[i].nextElementSibling;
      dropDownMenu.classList.toggle("menu_active");
    }
  };
}

