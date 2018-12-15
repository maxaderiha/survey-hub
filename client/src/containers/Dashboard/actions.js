import { ActionTypes } from './constants';

export const updateSurveys = surveys => ({
  type: ActionTypes.UPDATE_SURVEYS,
  payload: {
    surveys,
  },
});

export const createSurvey = survey => ({
  type: ActionTypes.CREATE_SURVEY,
  payload: {
    survey,
  },
});
