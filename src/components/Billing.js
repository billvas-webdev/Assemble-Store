import React from 'react';
import '../styles/index.scss';
import billingStyles from './billing.module.scss';

const Billing = (props) => (
    <div>
        <div className={billingStyles.listHeader}>
            <div className="showForMobile">{props.title}</div>
        </div>
        <div className={billingStyles.listHeader}>
            <form className={billingStyles.payment}>
            <h2> Payment Information </h2>
                <label>
                    Name on Card
                    <input type="text" name="input" placeholder="Name on Card"/>
                </label>

                <label>
                    Card Number
                    <input type="text" name="input" placeholder="XXXX XXXX XXXX XXXX"/>
                </label>

                <label>
                    Expiration Date
                    <input type="month" id="start" name="start" placeholder=""/>
                </label>

                <label>
                    CVV
                    <input type="text" name="input" placeholder="XXX"/>
                </label>

            </form>

            <form className={billingStyles.shipment}>
            <h2>Shipping Address</h2>
                <label>
                    Name
                    <input type="text" name="input" placeholder="Full Name"/>
                </label>

                <label>
                    Address
                    <input type="text" name="input" placeholder="Address"/>
                </label>

                <label>
                    Apt/suite/etc
                    <input type="text" name="input" placeholder="Apt/suite/etc"/>
                </label>

                <label>
                    City
                    <input type="text" name="input" placeholder="City"/>
                </label>
                <label>
                    State
                    <input type="text" name="input" placeholder="State"/>
                </label>
                <label>
                    Zip Code
                    <input type="text" name="input" placeholder="Zip Code"/>
                </label>

            </form>
        </div>

        <div className={billingStyles.button}>
            <a href="/orderComplete">
                Place Order</a>
        </div>
    </div>

);
Billing.defaultProps = { // using default props
    title: 'Check Out',
    subtitle1: 'Payment Information',
    subtitle2: 'Shipping Information'
};

export default Billing;
