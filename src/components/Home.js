import React from 'react';
import '../styles/index.scss';
import homeStyles from './home.module.scss';

const Home = (props) => (
    <div className={homeStyles.content}>
    <div className={homeStyles.listHeader}>
        <div className="showForMobile">{props.title}</div>
        <div className="showForDesktop">{props.subtitle1}</div>
        <div className="showForDesktop">{props.subtitle2}</div>
        </div>
        <div className={homeStyles.button}>
            <a href="/checkout">
                Checkout</a>
        </div>

            </div>

);
Home.defaultProps = { // using default props
    title: 'Your Cart',
    subtitle1: 'Quantity',
    subtitle2: 'Price'
};

export default Home;
