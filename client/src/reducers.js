import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import app from 'containers/App/reducer';
import dashboard from 'containers/Dashboard/reducer';

export default history => combineReducers({
  app,
  dashboard,
  router: connectRouter(history),
});
