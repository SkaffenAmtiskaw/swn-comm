import React, { useContext } from  'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../context'

const Home = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    console.log('redirect');
    return (<Redirect to="/auth" />)
  }

  return (
    <div>Home Content Here</div>
  );
};

export default Home;
