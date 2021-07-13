'use strict'
const products4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
//проверим есть ли photos и не пустой ли он
const products4WithPhotos = products4.filter(item => (item.photos && item.photos.length > false));
console.log(products4WithPhotos);


//сортировка товаров по цене от дешевых к дорогим
products4.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (b.price > a.price) {
        return -1;
    }
    return 0;
});
console.log(products4);