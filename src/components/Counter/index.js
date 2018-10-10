import { connect } from 'react-redux';
import Counter from './CounterComponent';
import { increaseCounter, decreaseCounter } from './CounterAction';

const mapStateToProps = state => {
  return {
    counterState: state.CounterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: current => {
      dispatch(increaseCounter(current));
    },
    decreaseCounter: current => {
      dispatch(decreaseCounter(current));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
