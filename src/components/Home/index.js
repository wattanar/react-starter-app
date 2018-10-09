import React from 'react';
import { connect } from 'react-redux';
import { setCurrentCounter } from '../../services/CounterService';

class Home extends React.Component {
  setCurrentCounter() {
    setCurrentCounter();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <p>Current counter is : {this.props.counterState.counter}</p>
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

const mapStateToProps = state => {
  return {
    counterState: state.CounterReducer
  };
};

export default connect(mapStateToProps)(Home);
