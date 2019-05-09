import React from 'react';
import FilterableProductTable from './FilterableProductTable';

const Cart = (props) => (<FilterableProductTable products={cart}/>);

const cart = [
    {
        category: "Shirts",
        quantity: 2,
        price: "$48.00",
        stocked: true,
        name: "Red Shirt",
        sku: 38094374,
        image: "images/redShirt.png",
        "altIMG": ""
    }, {
        category: "Shirts",
        quantity: 1,
        price: "$24.00",
        stocked: true,
        name: "Blue Shirt",
        sku: 38094375,
        image: "images/blueShirt.png",
        "altIMG": ""
    }, {
        category: "Socks",
        quantity: 4,
        price: "$48.00",
        stocked: true,
        name: "Blue Socks",
        sku: 38094321,
        image: "images/blueSocks.png",
        "altIMG": ""
    }
];

export default Cart;
