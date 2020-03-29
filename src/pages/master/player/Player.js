import React, { useState } from 'react';
import styled from 'styled-components';
import { Close, ConfirmationDialog } from '@wedgekit/core';

import { db } from '../../../firebase';

const Card = styled.div`
  border: 1px solid gray;
  padding: 12px;
  text-align: center;
  
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: auto auto;
  grid-template-areas: ". close"
                       "info info";
`;

const CloseWrapper = styled.div`
  grid-area: close;
`;

const InfoWrapper = styled.div`
  grid-area: info;
`;

const Player = ({ player }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const onDelete = () => {
    db
      .collection('users')
      .doc(player.id)
      .delete()
      .then(() => setConfirmOpen(false))
      .catch(() => console.log('Something went wrong - user may not have been successfully deleted.'));
  };

  return (
    <>
      <Card>
        <CloseWrapper>
          <Close onClose={setConfirmOpen} />
        </CloseWrapper>
        <InfoWrapper>
          {player.name}
        </InfoWrapper>
      </Card>
      {
        confirmOpen && (
          <ConfirmationDialog
            message="Are you sure you want to delete this player?"
            primaryDomain="danger"
            primaryLabel="Delete"
            onAction={onDelete}
            onExit={() => setConfirmOpen(false)}
          />
        )
      }
    </>
  );
}

export default Player;
