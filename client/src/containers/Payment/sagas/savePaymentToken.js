import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { fetchUserSuccess } from 'containers/App/actions';

export function* savePaymentToken(action) {
  try {
    const { token } = action.payload;
    const { data: user } = yield call(axios.post, '/api/stripe', token);

    yield put(fetchUserSuccess(user));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error occurred during saving payment token');
  }
}
