import * as Immutable from 'immutable';
import { ActionTypes } from './constants';

const appInitialState = Immutable.Map({
  currentValue: 0,
});

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER: return incrementCounter(state, action);
    default: return state;
  }
};

function incrementCounter(state, action) {
  return state.set('currentValue', state.get('currentValue') + 1);
}

export default appReducer;
