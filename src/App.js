import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from './pages/auth';
import Home from './pages/home';
import Master from './pages/master';

import { User } from './context';

function App() {
  return (
    <User>
      <Router>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/master">
            <Master />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </User>
  );
}

export default App;
