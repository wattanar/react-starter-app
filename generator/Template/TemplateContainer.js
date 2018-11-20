import { connect } from "react-redux";
import TemplateComponent from "./TemplateComponent";
import * as Action from "./TemplateAction";

const mapStateToProps = (state) => {
  return {
    TemplateState: state.TemplateReducer,
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
)(TemplateComponent);
