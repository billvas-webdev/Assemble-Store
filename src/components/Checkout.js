import React from 'react';
import '../styles/index.scss';
import checkOutStyles from './checkout.module.scss';

const Checkout = (props) => (
    <div className={checkOutStyles.listHeader}>
        <div className="showForMobile">{props.title}</div>
        <div className="showForDesktop">{props.subtitle1}</div>
        <div className="showForDesktop">{props.subtitle2}</div>
        <a className={checkOutStyles.button} href="/orderComplete">
            Place Order</a>
    </div>
);
Checkout.defaultProps = { // using default props
    title: 'Check Out'
};

export default Checkout;
