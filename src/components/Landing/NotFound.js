import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          marginTop: '100px'
        }}
      >
        <h1>404 - Page not found!</h1>
        <div>The page you looking for is not exists.</div>
      </div>
    );
  }
}

export default NotFound;