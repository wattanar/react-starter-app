import React from 'react';
import { increase, decrease, getCurrent } from './CounterAction';

class Counter extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCurrent());
  }

  increase() {
    this.props.dispatch(increase(this.props.counterState.counter));
  }

  decrease() {
    this.props.dispatch(decrease(this.props.counterState.counter));
  }

  render() {
    return (
      <div className="text-center">
        <h1>Counter</h1>
        <h3>{this.props.counterState.counter}</h3>
        <div>
          <button
            className="btn btn-danger"
            onClick={this.decrease.bind(this)}
            style={{ marginRight: '10px' }}
          >
            - 1
          </button>
          <button
            className="btn btn-success"
            onClick={this.increase.bind(this)}
          >
            + 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
