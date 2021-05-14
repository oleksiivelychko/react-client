import { combineReducers } from "redux";
import auth from "./AuthReducer";
import message from "./MessageReducer";
import validationErrors from "./ValidationReducer";

export default combineReducers({
    auth,
    message,
    validationErrors,
});
