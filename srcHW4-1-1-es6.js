'use strict'
class ProductES6 {
    constructor(nameOfProduct, price) {
        this.name = nameOfProduct;
        this.price = price;
    }
    make25PercentDiscount() {
        console.log(this.price);
        this.price = parseInt(this.price * 0.75 * 100) / 100;
        console.log(this.price);
    }
}
let productES6 = new ProductES6("bicycle", 999);
console.log(productES6);
productES6.make25PercentDiscount();
console.log(productES6);