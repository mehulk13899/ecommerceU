import { applyMiddleware, createStore } from "redux";
import rootReducer from './root-reducer';
import logger from "redux-logger";


const middleware = []

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;