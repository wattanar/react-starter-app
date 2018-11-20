import { connect } from "react-redux";
import NotFoundComponent from "./NotFoundComponent";
import * as Action from "./NotFoundAction";

const mapStateToProps = (state) => {
  return {
    NotFoundState: state.NotFoundReducer,
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
)(NotFoundComponent);
