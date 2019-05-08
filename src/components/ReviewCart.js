import React from 'react';
import Cart from './Cart';
import '../styles/index.scss';
import reviewCartStyles from './reviewCart.module.scss';

const ReviewCart = (props) => (
    <div className={reviewCartStyles.content}>
        <div className={reviewCartStyles.listHeader}>
            <div>{props.title}</div>
        </div>
        <Cart/>
        <div className={reviewCartStyles.button}>
            <a href="/billing">
                Checkout</a>
        </div>
    </div>

);
ReviewCart.defaultProps = { // using default props
    title: 'Your Cart',
};

export default ReviewCart;
