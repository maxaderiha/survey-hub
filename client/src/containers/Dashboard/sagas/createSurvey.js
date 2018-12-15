import axios from 'axios';
import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';

import { updateUser } from 'containers/App/actions';

export function* createSurvey(action) {
  try {   
    const { survey } = action.payload;
    const { data: user } = yield call(axios.post, '/api/surveys', survey);
    
    yield put(updateUser(user));
    yield put(push('/surveys'));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error occurred during creating survey');
  }
}
