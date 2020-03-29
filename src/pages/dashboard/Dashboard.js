import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../context'

const Dashboard = () => {
  const { user } = useContext(UserContext);

  if (user.gm) {
    return (<Redirect to="/master" />)
  }

  return (
    <h1>Player Dashboard</h1>
  );
}

export default Dashboard;
