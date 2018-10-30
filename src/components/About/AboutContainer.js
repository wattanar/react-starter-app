import { connect } from "react-redux";
import AboutComponent from "./AboutComponent";
// import { actionName } from "./AboutAction";

// const mapStateToProps = state => {
//   return {
//     AboutState: state.AboutReducer
//   };
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		actionName: () => dispatch(actionName()),
// 	};
// };

export default connect()(AboutComponent);
