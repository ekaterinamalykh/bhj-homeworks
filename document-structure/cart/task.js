const addButtons = document.getElementsByClassName("product__add");
const cart = document.getElementsByClassName("cart__products")[0];

const decreases = document.getElementsByClassName("product__quantity-control_dec");
const increases = document.getElementsByClassName("product__quantity-control_inc");
const values = document.getElementsByClassName("product__quantity-value");

for (let increase of increases) {
  increase.onclick = function() {
    let num = Number(this.previousElementSibling.textContent);
    this.previousElementSibling.textContent = num + 1;
  }   
}

for (let decrease of decreases) {
  decrease.onclick = function() {
    let num = Number(this.nextElementSibling.textContent);
    this.nextElementSibling.textContent = num - 1 || 1;
  }
}

for (let addButton of addButtons) {
    addButton.addEventListener("click", addProduct);
}

function addProduct() {
  cart.insertAdjacentHTML('beforeend', '<div class="cart__product" data-id="1"><img class="cart__product-image" src="image.png"><div class="cart__product-count">20</div></div>');
  cart.lastElementChild.attributes[1].value = this.parentElement.parentElement.parentElement.attributes[1].value; // data-id последнего товара в корзине
  // console.log(cart.lastElementChild.getElementsByClassName("cart__product-image")[0].attributes.src.value); //последняя картинка в корзине
  // console.log(this.parentElement.parentElement.parentElement.getElementsByClassName("product__image")[0].attributes.src.value); // картинка товара, который нажат
  cart.lastElementChild.getElementsByClassName("cart__product-image")[0].attributes.src.value = this.parentElement.parentElement.parentElement.getElementsByClassName("product__image")[0].attributes.src.value;
  cart.lastElementChild.getElementsByClassName("cart__product-count")[0].textContent = this.parentElement.getElementsByClassName("product__quantity-value")[0].textContent; //количество товара
}