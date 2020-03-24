import React from 'react';

export const Context = React.createContext(null);

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }
  }

  setUser = (user) => this.setState({ user });

  render() {
    const { user } = this.state;

    return (
      <Context.Provider value={{ user,  setUser: this.setUser }}>
        {this.props.children}
      </Context.Provider>
    )
  }
};

export default User;
