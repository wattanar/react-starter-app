import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
// import { actionName } from "./HomeAction";

const mapStateToProps = state => {
  return {
    HomeState: state.HomeReducer
  };
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		actionName: () => dispatch(actionName()),
// 	};
// };

export default connect(mapStateToProps)(HomeComponent);
