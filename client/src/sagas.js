import { all } from 'redux-saga/effects';

import appSagas from 'containers/App/sagas';
import dashboardSagas from 'containers/Dashboard/sagas';
import paymentSagas from 'containers/Payment/sagas';

export default function* rootSaga() {
  const effects = [
    ...appSagas,
    ...dashboardSagas,
    ...paymentSagas,
  ];

  yield all(effects);
}
