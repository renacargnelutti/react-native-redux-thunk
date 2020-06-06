
import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import pageReducer from '../reducers/pageReducer';

const rootReducer = combineReducers(
    { pageList: pageReducer },
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger));
};

export default configureStore;
