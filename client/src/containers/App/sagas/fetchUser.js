import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { updateUser, setUserLoadingState } from 'containers/App/actions';

export function* fetchUser() {
  try {
    yield put(setUserLoadingState(true));
    
    const { data: user } = yield call(axios, '/api/user');
    
    yield put(updateUser(user));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error occurred during fetching user');
  }
}
