import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { updateUser } from 'containers/App/actions';

export function* fetchUser() {
  try {
    const { data: user } = yield call(axios, '/api/user');
    
    yield put(updateUser(user));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error occurred during fetching user');
  }
}
