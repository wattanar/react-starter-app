import React from 'react';
import Example from '../components/Example';

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>About Page</h1>
        <Example message="This is message from example components" />
      </React.Fragment>
    );
  }
}
