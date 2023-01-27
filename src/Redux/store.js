
import { legacy_createStore,combineReducers ,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import {reducer} from "./ProductReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({reducer})
export const store  = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))