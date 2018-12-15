import { takeEvery } from 'redux-saga/effects';

import { createSurvey } from './createSurvey';
import { ActionTypes } from '../constants';

const effects = [
  takeEvery(ActionTypes.CREATE_SURVEY, createSurvey),
];

export default effects;
