import React from 'react';
import '../styles/index.scss';
import orderCompleteStyles from './orderComplete.module.scss';

const OrderComplete = (props) => (
    <div className={orderCompleteStyles.content}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <h2>{props.subtitle}</h2>
        <ul className={orderCompleteStyles.contacts}>
        <li><a href="/"> Go Home</a></li>
            <li>

            </li>
        </ul>
    </div>
)
OrderComplete.defaultProps = { // using default props
    title: 'Order Complete',
    subtitle: 'Contact Info:',
    content: `Hooray! Way to order those products!`
};

export default OrderComplete;
