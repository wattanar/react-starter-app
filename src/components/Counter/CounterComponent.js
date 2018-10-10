import React from "react";
import "./Counter.css";

const Counter = props => {
  return (
    <React.Fragment>
      <div className="text-center header-top-space">
        <h1>Counter</h1>
        <h3>{props.counterState.counter}</h3>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-default"
            onClick={props.decreaseCounter.bind(
              this,
              props.counterState.counter
            )}>
            - 1
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.increaseCounter.bind(
              this,
              props.counterState.counter
            )}>
            + 1
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Counter;
