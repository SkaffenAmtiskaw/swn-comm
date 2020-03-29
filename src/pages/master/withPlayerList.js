import React from 'react';

import { db } from '../../firebase';

const withPlayerList = (WrappedComponent) => class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = db.collection('users')
      .where('gm', '==', false)
      .onSnapshot((snapshot)  => {
        this.setState({ players: snapshot.docs.map(doc => doc.data()) });
      }, (err) => {
        console.log('something has gone wrong! ',  err);
      })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { players } = this.state;

    return (<WrappedComponent players={players} />)
  }
}

export default withPlayerList;
