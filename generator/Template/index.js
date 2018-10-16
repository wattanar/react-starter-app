import { connect } from 'react-redux';
import TemplateComponent from './TemplateComponent';
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

export default connect()(TemplateComponent);
