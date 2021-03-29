import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import CategoryDetails from './CategoryDetails';
import FoodDetails from './FoodDetails';
import About from './About';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        exact
        path="/categories/:strCategory"
        component={CategoryDetails}
      />
      <Route exact path="/food/:foodId" component={FoodDetails} />
      <Route exact path="/about" component={About} />
    </Switch>
  </Router>
);

export default Routes;
