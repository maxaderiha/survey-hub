import * as Immutable from 'immutable';
import { ActionTypes } from './constants';

const appInitialState = Immutable.Map({
  user: null,
  isUserLoading: false,
});

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_LOADING_STATE: return setUserLoadingState(state, action);
    case ActionTypes.UPDATE_USER: return updateUser(state, action);
    default: return state;
  }
};

function setUserLoadingState(state, action) {
  return state.set('isUserLoading', action.payload.isUserLoading);
}

function updateUser(state, action) {
  return state
    .set('user', Immutable.fromJS(action.payload.user || null))
    .set('isUserLoading', false);
}

export default appReducer;
