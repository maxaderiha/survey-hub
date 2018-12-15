import * as Immutable from 'immutable';
import { ActionTypes } from './constants';

const dashboardInitialState = Immutable.Map({
  surveys: Immutable.Map(),
});

const dashboardReducer = (state = dashboardInitialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SURVEYS: return updateSurveys(state, action);
    default: return state;
  }
};

function updateSurveys(state, action) {
  return state.mergeIn('surveys', Immutable.fromJS(action.payload.surveys));
}

export default dashboardReducer;
