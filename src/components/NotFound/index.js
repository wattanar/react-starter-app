import { connect } from "react-redux";
import NotFoundComponent from "./NotFoundComponent";
// import { actionName } from "./NotFoundAction";

// const mapStateToProps = state => {
//   return {
//     NotFoundState: state.NotFoundReducer
//   };
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		actionName: () => dispatch(actionName()),
// 	};
// };

export default connect()(NotFoundComponent);
