import React, { useContext } from  'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../context'

const Home = () => {
  const { user } = useContext(UserContext);



  if (!user) {
    // TODO: Add state here so we can replace history at some point.
    return (<Redirect to="/auth" />)
  } else if (user.gm) {
    return (<Redirect to="/master" />)
  }

  return (
    <div>Home Content Here</div>
  );
};

export default Home;
