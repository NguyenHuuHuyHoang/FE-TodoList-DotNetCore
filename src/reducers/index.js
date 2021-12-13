import { combineReducers } from "redux";
import groups from "./groups";
import auth from "./auth";
import todos from "./todos";

const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  groups,
  auth,
  todos,
});

export default rootReducer;
