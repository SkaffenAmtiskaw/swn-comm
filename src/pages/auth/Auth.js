import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Input } from '@wedgekit/core';

import { UserContext } from '../../context';

const Auth = ({ history }) => {
  const [input, setInput] = useState('');
  const user = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    user.setUser(input);
    // TODO: Change this to a replace  when history state  is added.
    history.push('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <Input label="Name" value={input} onChange={setInput} />
    </form>
  );
};

export default withRouter(Auth);
