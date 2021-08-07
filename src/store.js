import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import searchFormReducer from './header/searchFormReducer.js';
import optionsReducer from './options/optionsReducer.js';
import listReducer from './list/listReducer.js';

const reducers = combineReducers({
	search: searchFormReducer,
	options: optionsReducer,
	list: listReducer
});

const middleware = [thunk];

if (import.meta.env.MODE === 'development') {
	middleware.push(logger);
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export default createStore(
	reducers,
	composeEnhancers(applyMiddleware(...middleware))
);
