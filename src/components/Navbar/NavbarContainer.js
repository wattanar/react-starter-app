import { connect } from "react-redux";
import NavbarComponent from "./NavbarComponent";
import * as Action from "./NavbarAction";

const mapStateToProps = (state) => {
  return {
    NavbarState: state.NavbarReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    helloBack: () => dispatch(Action.helloBack()),
    touchBurger: (currentBurger) => dispatch(Action.touchBurger(currentBurger)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComponent);
