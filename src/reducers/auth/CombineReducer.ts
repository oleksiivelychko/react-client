import { combineReducers } from 'redux';
import auth from './AuthReducer';
import message from './MessageReducer';

export default combineReducers({
    auth,
    message,
});
