import React, { useState } from 'react';
import { Input } from '@wedgekit/core';

import { db } from '../../firebase';
import { Page } from '../../styled';
import { Grid } from './styled';

const Master = ()  => {
  const [player, setPlayer] = useState('');
  const [players, setPlayers]  = useState([]);

  db.collection('users')
    .where('gm', '==', false)
    .get()
    .then((snapshot)  => {
      setPlayers(snapshot.docs.map(doc => doc.data()));
    })
    .catch((err) => {
      console.log('something has gone wrong! ',  err);
    });

  const addPlayer = (e) => {
    e.preventDefault();

    if(player) {
      const newPlayer = {
        name: player,
        gm: false,
      };

      db
        .collection('users')
        .add(newPlayer)
        .then((ref) =>  {
          setPlayers([...players, newPlayer]);
          setPlayer('');
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Page>
      <h1>Game Master</h1>
      <form onSubmit={addPlayer}>
        <Input label="Add Player" value={player} onChange={setPlayer} />
      </form>
      <Grid>
        {
          players.map(doc => (
            <div key={doc.name} style={{ padding: '12px', border: '1px solid gray', textAlign: 'center' }}>
              {doc.name}
            </div>
          ))
        }
      </Grid>
    </Page>
  );
};

export default Master;
