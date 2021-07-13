'use strict'
function ProductES5(nameOfProduct, price) {
    this.name = nameOfProduct;
    this.price = price;
}
ProductES5.prototype.make25PercentDiscount = function () {
    console.log(this.price);
    this.price = parseInt(this.price * 0.75 * 100) / 100;
    console.log(this.price);
}
let productES5 = new ProductES5("bike", 99);
console.log(productES5);
productES5.make25PercentDiscount();
console.log(productES5);