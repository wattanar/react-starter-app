import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
import * as Action from "./HomeAction";

const mapStateToProps = (state) => {
  return {
    HomeState: state.HomeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    helloBack: () => dispatch(Action.helloBack()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
