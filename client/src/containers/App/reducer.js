import * as Immutable from 'immutable';
import { ActionTypes } from './constants';

const appInitialState = Immutable.Map({
  user: null,
  isUserLoading: false,
});

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_REQUEST: return state.set('isUserLoading', true);
    case ActionTypes.FETCH_USER_SUCCESS: return fetchUserSuccess(state, action);
    default: return state;
  }
};

function fetchUserSuccess(state, action) {
  return state
    .set('user', Immutable.fromJS(action.payload.user || null))
    .set('isUserLoading', false);
}

export default appReducer;
