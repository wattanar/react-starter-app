import { connect } from 'react-redux';
import { inc, dec, current } from './CounterAction';
import Counter from './Counter';

const mapStateToProps = state => {
  return {
    counterState: state.CounterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    current: () => dispatch(current()),
    inc: oldCount => dispatch(inc(oldCount)),
    dec: oldCount => dispatch(dec(oldCount))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
