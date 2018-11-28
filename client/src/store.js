import * as Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from 'reducers';

const initialState = Immutable.Map();
const store = createStore(rootReducer, initialState, applyMiddleware(logger));

export default store;
