import { routerMiddleware as createRouterMiddleware } from 'connected-react-router/immutable';
import * as Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import history from './configureHistory';
import createRootReducer from './reducers';

const initialState = Immutable.Map();
const rootReducer = createRootReducer(history);
const routerMiddleware = createRouterMiddleware(history);
const enhancer = applyMiddleware(routerMiddleware, logger);

export default createStore(
  rootReducer,
  initialState,
  enhancer,
);
