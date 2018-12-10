import { all } from 'redux-saga/effects';

import appSagas from 'containers/App/sagas';
import paymentSagas from 'containers/Payment/sagas';

export default function* rootSaga() {
  const effects = [
    ...appSagas,
    ...paymentSagas,
  ];

  yield all(effects);
}
