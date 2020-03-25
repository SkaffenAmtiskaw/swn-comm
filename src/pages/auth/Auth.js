import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '@wedgekit/core';
import color from '@wedgekit/color';

import { UserContext } from '../../context';
import { db } from '../../firebase';
import { Page } from '../../styled';

const Error = styled.div`
  font-size: 12px;
  color: ${color.R600};
`;

const Auth = ({ history }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const user = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if(input) {
      db
        .collection('users')
        .where('name', '==', input)
        .get()
        .then((snapshot) => {
          user.setUser(snapshot.docs[0].data());
          // TODO: Change this to a replace  when history state  is added.
          history.push('/');
        })
        .catch((error) => setError('User not found'));
    }
  };

  return (
    <Page as="form" onSubmit={onSubmit}>
      <h1>Login</h1>
      <Input label="Name" value={input} onChange={setInput} />
      {!!error && <Error>{error}</Error>}
    </Page>
  );
};

export default withRouter(Auth);
