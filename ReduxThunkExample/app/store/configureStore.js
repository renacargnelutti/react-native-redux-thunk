
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/index';

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger));
};

export default configureStore;
