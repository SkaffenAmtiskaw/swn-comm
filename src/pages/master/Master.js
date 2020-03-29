import React, { useState } from 'react';
import { Input } from '@wedgekit/core';
import { v4 as uuid } from 'uuid';

import { db } from '../../firebase';
import { Page } from '../../styled';
import { Grid } from './styled';
import Player from './player';
import withPlayerList from './withPlayerList';

const Master = ({ players })  => {
  const [player, setPlayer] = useState('');

  const addPlayer = (e) => {
    e.preventDefault();

    if(player) {
      const id = uuid();

      const newPlayer = {
        name: player,
        gm: false,
        id,
      };

      db
        .collection('users')
        .doc(id)
        .set(newPlayer)
        .then((ref) =>  {
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
            <Player key={doc.id} player={doc} />
          ))
        }
      </Grid>
    </Page>
  );
};

export default withPlayerList(Master);
