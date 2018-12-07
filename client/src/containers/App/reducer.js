import * as Immutable from 'immutable';
import { ActionTypes } from './constants';

const appInitialState = Immutable.Map({
  user: null,
  isUserLoading: false,
});

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER: return fetchUser(state, action);
    case ActionTypes.CREATE_USER: return createUser(state, action);
    default: return state;
  }
};

function fetchUser(state, action) {
  return state.set('isUserLoading', true);
}

function createUser(state, action) {
  return state
    .set('user', Immutable.fromJS(action.payload.user || null))
    .set('isUserLoading', false);
}

export default appReducer;
