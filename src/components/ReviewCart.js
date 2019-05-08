import React from 'react';
import Cart from './Cart';
import '../styles/index.scss';
import reviewCartStyles from './reviewCart.module.scss';

const ReviewCart = (props) => (
    <div className={reviewCartStyles.content}>
        <div className={reviewCartStyles.listHeader}>
            <div>{props.title}</div>
            <div>{props.subtitle1}</div>
            <div>{props.subtitle2}</div>
            <div>{props.subtitle3}</div>
            <div>{props.subtitle4}</div>
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
    subtitle1: 'Item',
    subtitle2: 'Sku',
    subtitle3: 'Quantity',
    subtitle4: 'Price'
};

export default ReviewCart;
