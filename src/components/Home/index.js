import { connect } from 'react-redux';
import Home from './HomeComponent';

const mapStateToProps = state => {
  return {
    counterState: state.CounterReducer
  };
};

export default connect(mapStateToProps)(Home);
