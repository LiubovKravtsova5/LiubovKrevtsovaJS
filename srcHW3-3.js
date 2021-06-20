'use strict'
const products3 = [
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
products3.forEach(function (item) {
    console.log("price today for id" + item.id + " is " + (item.price * 0.85));
});

