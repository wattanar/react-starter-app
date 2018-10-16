import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
// import { actionName } from './TemplateAction'

// const mapStateToProps = state => {
//   return {
//     TemplateState: state.TemplateReducer
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     actionName: () => dispatch(actionName()),
//   };
// };
export default connect()(HomeComponent);
