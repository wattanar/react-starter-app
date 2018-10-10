import React from "react";

const Counter = props => {
  return (
    <div className="text-center">
      <h1>Counter</h1>
      <h3>{props.counterState.counter}</h3>
      <div>
        <button
          className="btn btn-danger"
          onClick={props.decrease(1)}
          style={{ marginRight: "10px" }}>
          - 1
        </button>
        <button className="btn btn-success" onClick={props.increase(1)}>
          + 1
        </button>
      </div>
    </div>
  );
};
export default Counter;
