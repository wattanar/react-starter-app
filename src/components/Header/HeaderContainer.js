import { connect } from "react-redux";
import HeaderComponent from "./HeaderComponent";
import { navToggle } from "./HeaderAction";

const mapStateToProps = state => {
  return {
    HeaderState: state.HeaderReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navToggle: toggleValue => dispatch(navToggle(toggleValue))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
