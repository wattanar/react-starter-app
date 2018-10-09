import { connect } from 'react-redux';
import Counter from './CounterComponent';

const mapStateToProps = state => {
  return {
    counterState: state.CounterReducer
  };
};

export default connect(mapStateToProps)(Counter);
