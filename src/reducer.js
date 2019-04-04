import { combineReducers } from "redux";
import { createReducer } from "./automate";

export default combineReducers({
  pincode: createReducer("pincode")
});
