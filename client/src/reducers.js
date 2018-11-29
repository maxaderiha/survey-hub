import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import app from 'containers/App/reducer';

export default history => combineReducers({
  app,
  router: connectRouter(history),
});
