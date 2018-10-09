import React from 'react';
import { setCurrentCounter } from '../../services/CounterService';

class Home extends React.Component {
  setCurrentCounter() {
    setCurrentCounter();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <p>This is home page</p>
        <div>
          <button
            onClick={this.setCurrentCounter.bind(this)}
            className="btn btn-primary"
          >
            Set Counter = 100
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
