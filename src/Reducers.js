import { combineReducers } from "redux";
import { HomeReducer } from "./components/Home/HomeReducer";
import { HeaderReducer } from "./components/Header/HeaderReducer";

const Reducers = combineReducers({
  HomeReducer,
  HeaderReducer
});

export default Reducers;
