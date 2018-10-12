import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';

const mapStateToProps = state => {
  return {
    HeaderState: state.HeaderReducer
  };
};

export default connect(mapStateToProps)(HeaderComponent);
