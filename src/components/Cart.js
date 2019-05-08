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
        sku: 38094374
    }, {
        category: "Shirts",
        quantity: 1,
        price: "$24.00",
        stocked: true,
        name: "Blue Shirt",
        sku: 38094375
    }, {
        category: "Socks",
        quantity: 4,
        price: "$48.00",
        stocked: true,
        name: "Blue Socks",
        sku: 38094321
    }
];

export default Cart;
