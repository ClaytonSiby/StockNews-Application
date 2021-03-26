import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import CategoryDetails from './CategoryDetails';
import FoodDetails from './FoodDetails';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route exact path="/" component={App} />
    <Route exact path="/categories/:strCategory" component={CategoryDetails} />
    <Route exact path="/food/:foodId" component={FoodDetails} />
  </Router>
);

export default Routes;