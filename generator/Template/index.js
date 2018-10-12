import { connect } from 'react-redux';
import TemplateComponent from './TemplateComponent';

// const mapStateToProps = state => {
//   return {
//     TemplateState: state.TemplateReducer
//   };
// };

export default connect()(TemplateComponent);
