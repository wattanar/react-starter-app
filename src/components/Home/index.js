import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

// const mapStateToProps = state => {
//   return {
//     HomeState: state.HomeReducer
//   };
// };

export default connect()(HomeComponent);
