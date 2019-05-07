import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import OrderComplete from '../components/OrderComplete';
import ReviewCart from '../components/ReviewCart';
import Item from '../components/Item';
import Layout from '../components/Layout'
import NotFoundPage from '../components/NotFoundPage';
import Billing from '../components/Billing';

const AppRouter = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" component={ReviewCart} exact={true}/>
                <Route path="/billing/" component={Billing} exact={true}/>
                <Route path="/billing/:id" component={Item}/>
                <Route path="/orderComplete" component={OrderComplete}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;
