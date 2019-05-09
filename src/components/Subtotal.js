import React from 'react';
import subtotalStyles from './subtotal.module.scss';

const Subtotal = (props) => (
    <div className={subtotalStyles.content}>
        <ul>
            <li>{props.title}</li>
            <li>{props.content}</li>
        </ul>
    </div>
)
Subtotal.defaultProps = {
    title: 'SUBTOTAL',
    content: `$120.00`
};

export default Subtotal;
