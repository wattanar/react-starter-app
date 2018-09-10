import React from 'react';

const AppContext = React.createContext();

export class Provider extends React.Component {
  state = {
    counter: 0
  };

  action = {};

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          action: this.action
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const Consumer = AppContext.Consumer;
