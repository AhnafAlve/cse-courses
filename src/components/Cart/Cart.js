import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const topic = cart[i];
        total = total + topic.Price;
    }

    return (
        <div className="cart">
            <h1>Order Summery</h1>
            <h3>Quantity: {cart.length}</h3>
            <h3>Total Price: {total}</h3>
        </div>
    );
};

export default Cart;