import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Input } from '@wedgekit/core';

import { UserContext } from '../../context';
import { db } from '../../firebase';

const Auth = ({ history }) => {
  const [input, setInput] = useState('');
  const user = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();

    db
      .collection('users')
      .where('name', '==', input)
      .get()
      .then((snapshot) => {
        user.setUser(snapshot.docs[0].data());
        // TODO: Change this to a replace  when history state  is added.
        history.push('/');
      })
      .catch((error) => console.log('User not found', error));

  };

  return (
    <form onSubmit={onSubmit}>
      <Input label="Name" value={input} onChange={setInput} />
    </form>
  );
};

export default withRouter(Auth);
