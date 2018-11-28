import { ActionTypes } from './constants';

const appInitialState = {
  currentValue: 0,
};

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER: return incrementCounter(state, action);
    default: return state;
  }
};

function incrementCounter(state, action) {
  return {
    currentValue: ++state.currentValue,
  };
}

export default appReducer;
