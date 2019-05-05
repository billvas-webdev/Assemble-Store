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
        <ul className={orderCompleteStyles.buttonLocation}>
            <li>
                <a className={orderCompleteStyles.button} href="/">Go Home</a>
            </li>
        </ul>

    </div>
)
OrderComplete.defaultProps = { // using default props
    title: 'Order Complete',
    content: `Hooray! Way to order those products!`
};

export default OrderComplete;
