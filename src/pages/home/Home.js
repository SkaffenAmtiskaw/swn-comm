import React, { useContext } from  'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Button } from '@wedgekit/core';

import { UserContext } from '../../context'
import { Page } from '../../styled';

import Master from '../master';
import Dashboard from '../dashboard';

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    // TODO: Add state here so we can replace history at some point.
    return (<Redirect to="/auth" />)
  }

  return (
    <Page>
      <Button onClick={() => setUser()}>Log Out</Button>
      <Switch>
        <Route path="/master">
          <Master />
        </Route>
        <Route path="*">
          <Dashboard />
        </Route>
      </Switch>
    </Page>
  );
};

export default Home;
