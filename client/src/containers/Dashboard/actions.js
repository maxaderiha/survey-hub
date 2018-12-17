import { ActionTypes } from './constants';

export const createSurvey = survey => ({
  type: ActionTypes.CREATE_SURVEY,
  payload: {
    survey,
  },
});

export const createSurveySuccess = survey => ({
  type: ActionTypes.CREATE_SURVEY_SUCCESS,
  payload: {
    survey,
  },
});

export const fetchSurveys = () => ({
  type: ActionTypes.FETCH_SURVEYS_REQUEST,
});

export const fetchSurveysSuccess = (surveys) => ({
  type: ActionTypes.FETCH_SURVEYS_SUCCESS,
  payload: {
    surveys,
  },
});
