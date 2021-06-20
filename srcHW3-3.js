'use strict'
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(function (item) {
    console.log("price today for id" + item.id + " is " + (item.price * 0.85));
});

