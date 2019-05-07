import React from 'react';
import '../styles/index.scss';
import reviewCartStyles from './reviewCart.module.scss';

const ReviewCart = (props) => (
    <div className={reviewCartStyles.content}>
        <div className={reviewCartStyles.listHeader}>
            <div className="showForMobile">{props.title}</div>
            <div className="showForDesktop">{props.subtitle1}</div>
            <div className="showForDesktop">{props.subtitle2}</div>
        </div>
        <div className={reviewCartStyles.button}>
            <a href="/billing">
                Checkout</a>
        </div>
    </div>

);
ReviewCart.defaultProps = { // using default props
    title: 'Your Cart',
    subtitle1: 'Quantity',
    subtitle2: 'Price'
};

export default ReviewCart;
