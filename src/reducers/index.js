import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamsReducer from "./streamReducer.js";
import authReducer from "./authReducer.js";

export default combineReducers({
  authorization: authReducer,
  streams: streamsReducer,
  form: formReducer,
});
