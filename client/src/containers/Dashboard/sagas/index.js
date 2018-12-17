import { takeEvery } from 'redux-saga/effects';

import { createSurvey } from './createSurvey';
import { fetchSurveys } from './fetchSurveys';
import { ActionTypes } from '../constants';

const effects = [
  takeEvery(ActionTypes.CREATE_SURVEY, createSurvey),
  takeEvery(ActionTypes.FETCH_SURVEYS_REQUEST, fetchSurveys),
];

export default effects;
