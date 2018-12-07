import { takeEvery } from 'redux-saga/effects';

import { fetchUser } from './fetchUser';
import { ActionTypes } from '../constants';

const effects = [
  takeEvery(ActionTypes.FETCH_USER, fetchUser),
];

export default effects;
