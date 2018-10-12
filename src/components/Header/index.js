import { connect } from "react-redux";
import HeaderComponent from "./HeaderComponent";

const mapStateToProps = state => {
  return {
    headerState: state.HeaderReducer
  };
};

export default connect(mapStateToProps)(HeaderComponent);
