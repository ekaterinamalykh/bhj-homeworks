let xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    const img = document.getElementsByClassName("loader")[0];
    img.classList = "loader";
    const response = xhr.response.response.Valute;
    const items = document.getElementById("items");
    const currencies = Object.keys(response);
    const values = Object.values(response);

    for (let i = 0; i < currencies.length; i++) {
      items.insertAdjacentHTML('beforeend', '<div class = "item"><div class="item__code">USD</div><div class="item__value">32</div><div class="item__currency">руб.</div></div>');
      items.lastElementChild.getElementsByClassName("item__code")[0].textContent = values[i].CharCode;
      items.lastElementChild.getElementsByClassName("item__value")[0].textContent = values[i].Value;
    }
  }
}





