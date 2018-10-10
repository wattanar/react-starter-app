import React from 'react';
import { _setCurrentCounter } from '../../services/CounterService';

const Home = props => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <p>Current Counter is : {props.counterState.counter}</p>
      <div>
        <button
          onClick={_setCurrentCounter.bind(this)}
          className="btn btn-primary"
        >
          Set Counter = 100
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
