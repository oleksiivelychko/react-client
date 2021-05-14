import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import CombineReducers from './auth/CombineReducer';

const middleware = [thunk];

const store = createStore(
    CombineReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
