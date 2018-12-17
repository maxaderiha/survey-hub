import axios from 'axios';
import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';

import { createSurveySuccess } from 'containers/Dashboard/actions';

export function* createSurvey(action) {
  try {   
    const { survey } = action.payload;
    const { data: newSurvey } = yield call(axios.post, '/api/surveys', survey);
    
    yield put(createSurveySuccess(newSurvey));
    yield put(push('/surveys'));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error occurred during creating survey', error);
  }
}
