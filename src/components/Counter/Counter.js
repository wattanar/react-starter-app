import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.current;
  }

  inc() {
    this.props.inc(this.props.counterState.counter);
  }

  dec() {
    this.props.dec(this.props.counterState.counter);
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
