import React from 'react';
import '../styles/index.scss';
import billingStyles from './billing.module.scss';

const Billing = (props) => (
    <div className={billingStyles.content}>
        <div className={billingStyles.listHeader}>
            <div className="showForMobile">{props.title}</div>
            <div className="showForDesktop">{props.subtitle1}</div>
            <div className="showForDesktop">{props.subtitle2}</div>
        </div>
        <div className={billingStyles.button}>
            <a href="/orderComplete">
                Place Order</a>
        </div>
    </div>

);
Billing.defaultProps = { // using default props
    title: 'Check Out'
};

export default Billing;
