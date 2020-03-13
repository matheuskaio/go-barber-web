import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route to="/" exact component={SignIn} />
      <Route to="/register" component={SignUp} />
      <Route to="/dashboard" component={Dashboard} isPrivate />
      <Route to="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
