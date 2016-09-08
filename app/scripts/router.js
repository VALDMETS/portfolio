import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
import FrontPage from './frontpage';

const router = (
  <Router history={hashHistory}>
    <Route path='/*' component={FrontPage}/>
  </Router>
);

export default router;
