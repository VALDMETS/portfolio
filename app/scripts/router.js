import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import FrontPage from './frontpage';

const router = (
  <Router history={browserHistory}>
    <Route path='/main' component={FrontPage}/>
  </Router>
);

export default router;
