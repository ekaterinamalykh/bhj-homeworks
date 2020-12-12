const cart = document.getElementsByClassName("cart__products")[0]; // корзина
let arrayOfCart = Array.from(cart);
const counter = document.getElementsByClassName("product"); // витрина

for(let product of counter) {
  const decrease = product.getElementsByClassName("product__quantity-control_dec")[0];
  decrease.onclick = function() {
    let num = Number(this.nextElementSibling.textContent);
    this.nextElementSibling.textContent = num - 1 || 1;
  }
  const increase = product.getElementsByClassName("product__quantity-control_inc")[0];
  increase.onclick = function() {
    let num = Number(this.previousElementSibling.textContent);
    this.previousElementSibling.textContent = num + 1;
  }
  const addButton = product.getElementsByClassName("product__add")[0];
  addButton.onclick = function() {
    if ((arrayOfCart.find(item => item.dataset.id == product.dataset.id)) == undefined) {
      arrayOfCart.push(product);
      cart.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id=${product.dataset.id}><img class="cart__product-image" src=${product.getElementsByTagName("img")[0].src}><div class="cart__product-count">${product.getElementsByClassName("product__quantity-value")[0].textContent}</div></div>`);  
    } else {
      let productsInCart = cart.getElementsByClassName("cart__product");
      let productToUpdate = Array.from(productsInCart).find(item => item.dataset.id == product.dataset.id);
      let quantity = Number(productToUpdate.getElementsByClassName("cart__product-count")[0].textContent); // кол-во в корзине
      let quantityToAdd = Number(product.getElementsByClassName("product__quantity-value")[0].textContent); // кол-во добавить
      productToUpdate.getElementsByClassName("cart__product-count")[0].textContent = quantity + quantityToAdd; // новое кол-во в корзине
    }
  }
}