import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from './pages/auth';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Router path="/">
          <Home />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
