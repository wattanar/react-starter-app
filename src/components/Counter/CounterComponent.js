import React from 'react';
import './Counter.css';

const Counter = props => {
  return (
    <React.Fragment>
      <h1>Counter</h1>
      <h3>{props.counterState.counter}</h3>
      <div>
        <button
          className="counter-button"
          onClick={props.decreaseCounter.bind(this, props.counterState.counter)}
        >
          - 1
        </button>
        <button
          className="counter-button"
          onClick={props.increaseCounter.bind(this, props.counterState.counter)}
        >
          + 1
        </button>
      </div>
    </React.Fragment>
  );
};
export default Counter;
