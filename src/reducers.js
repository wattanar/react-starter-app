import { combineReducers } from "redux";
import HomeReducer from "./components/Home/HomeReducer";
import NavbarReducer from "./components/Navbar/NavbarReducer";

const reducers = combineReducers({
  HomeReducer,
  NavbarReducer,
});

export default reducers;
