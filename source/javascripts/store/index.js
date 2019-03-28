import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import general from './general';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV !== 'production'
});

/**
 * Store設定、Middlware設定
 * @param {Object} initialState
 */
const configureStore = initialState => {
  const enhancer = compose(applyMiddleware(ReduxThunk, loggerMiddleware));
  return createStore(reducers, initialState, enhancer);
};

// initialState
const initialState = {
  general: general
};

const store = configureStore(initialState);
export default store;
