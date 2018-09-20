import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// redux part, wonder these go to the store or index
// import createLogger from 'redux-logger';
// import thunk from 'redux-thunk';
// import freeze from 'redux-freeze';
// import _ from 'lodash';


// TODO: to articulate in the future
// const logger = createLogger();
// const middlewares = _.compact([thunk, freeze, logger]);
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// const store = createStoreWithMiddleware(rootReducer);
//
const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
