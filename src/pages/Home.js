import React from 'react';
import Example from '../components/Example';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <Example message="This is message from example components" />
      </React.Fragment>
    );
  }
}
