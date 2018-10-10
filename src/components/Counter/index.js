import { connect } from "react-redux";
import Counter from "./CounterComponent";
import { increase, decrease } from "./CounterAction";

const mapStateToProps = state => {
  return {
    counterState: state.CounterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: current => dispatch(increase(current)),
    decrease: current => dispatch(decrease(current))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
