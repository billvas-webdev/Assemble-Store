import React from 'react';
import '../styles/index.scss';
import orderCompleteStyles from './orderComplete.module.scss';

const OrderComplete = (props) => (
    <div className={orderCompleteStyles.content}>
        <div className={orderCompleteStyles.listHeader}>
            <h1>{props.title}</h1>
        </div>
        <p>{props.content}</p>
        <h2>{props.subtitle}</h2>
        <div className={orderCompleteStyles.button}>
            <a href="/">
                Go Home</a>
        </div>
    </div>
)
OrderComplete.defaultProps = {
    title: 'Order Complete',
    content: `Hooray! Way to order those products!`
};

export default OrderComplete;
