import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './RouteWrapper';

import Main from '../views/Main';
import Login from '../views/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} isPrivate />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
