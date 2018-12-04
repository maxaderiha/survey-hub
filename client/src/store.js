import { routerMiddleware as createRouterMiddleware } from 'connected-react-router/immutable';
import * as Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import history from './configureHistory';
import createRootReducer from './reducers';
import rootSaga  from './sagas';

const initialState = Immutable.Map();
const rootReducer = createRootReducer(history);

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const enhancer = applyMiddleware(
  sagaMiddleware,
  routerMiddleware,
  logger,
);

export default createStore(
  rootReducer,
  initialState,
  enhancer,
);

sagaMiddleware.run(rootSaga);
