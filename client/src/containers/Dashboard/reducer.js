import * as Immutable from 'immutable';
import { ActionTypes } from './constants';

const dashboardInitialState = Immutable.Map({
  surveys: Immutable.Map(),
  isSurveysLoaded: false,
});

const dashboardReducer = (state = dashboardInitialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_SURVEY_SUCCESS: return createSurveySuccess(state, action);
    case ActionTypes.FETCH_SURVEYS_SUCCESS: return fetchSurveysSuccess(state, action);
    default: return state;
  }
};

function fetchSurveysSuccess(state, action) {
  const { surveys } = action.payload;

  return state
    .mergeIn(['surveys'], Immutable.fromJS(surveys))
    .set('isSurveysLoaded', Object.keys(surveys).length < 5);
  
}

function createSurveySuccess(state, action) {
  const { survey } = action.payload;

  return state.setIn(['surveys', survey._id], Immutable.fromJS(survey));
}

export default dashboardReducer;
