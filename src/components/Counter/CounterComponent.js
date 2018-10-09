import React from 'react';
import { inc, dec, current } from './CounterAction';

class Counter extends React.Component {
  componentDidMount() {
    this.props.dispatch(current());
  }

  inc() {
    this.props.dispatch(inc(this.props.counterState.counter));
  }

  dec() {
    this.props.dispatch(dec(this.props.counterState.counter));
  }

  render() {
    return (
      <div className="text-center">
        <h1>Counter</h1>
        <h3>{this.props.counterState.counter}</h3>
        <div>
          <button
            className="btn btn-danger"
            onClick={this.dec.bind(this)}
            style={{ marginRight: '10px' }}
          >
            - 1
          </button>
          <button className="btn btn-success" onClick={this.inc.bind(this)}>
            + 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
