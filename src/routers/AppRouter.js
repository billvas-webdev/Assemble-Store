import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import OrderComplete from '../components/OrderComplete';
import Home from '../components/Home';
import Item from '../components/Item';
import Layout from '../components/Layout'
import NotFoundPage from '../components/NotFoundPage';
import Checkout from '../components/Checkout';

const AppRouter = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/Checkout/" component={Checkout} exact={true}/>
                <Route path="/Checkout/:id" component={Item}/>
                <Route path="/OrderComplete" component={OrderComplete}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;
