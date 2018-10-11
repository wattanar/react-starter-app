import React from 'react';
import { _setCurrentCounter } from '../../services/CounterService';

const Home = props => {
  return (
    <React.Fragment>
      <div className="text-center header-top-space">
        <h1>Home Page</h1>
        <p>Current Counter is : {props.counterState.counter}</p>
        <div className="btn-group">
          <button
            onClick={_setCurrentCounter.bind(this, 0)}
            className="btn btn-default"
          >
            Set Counter = 0
          </button>
          <button
            onClick={_setCurrentCounter.bind(this, 100)}
            className="btn btn-primary"
          >
            Set Counter = 100
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
