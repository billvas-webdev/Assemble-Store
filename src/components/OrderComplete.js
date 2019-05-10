import React from 'react';
import '../styles/index.scss';
import orderCompleteStyles from './orderComplete.module.scss';

const OrderComplete = (props) => (
    <div className={orderCompleteStyles.content}>
        <div className={orderCompleteStyles.listHeader}>
            {props.title}
        </div>
        <p>{props.content}</p>
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
