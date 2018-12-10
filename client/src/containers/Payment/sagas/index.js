import { takeEvery } from 'redux-saga/effects';

import { savePaymentToken } from './savePaymentToken';
import { ActionTypes } from '../constants';

const effects = [
  takeEvery(ActionTypes.SAVE_PAYMENT_TOKEN, savePaymentToken),
];

export default effects;
