import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';

import { arrToObject } from 'common/utils/arrToObject';
import { fetchSurveysSuccess } from 'containers/Dashboard/actions';
import { surveys } from 'containers/Dashboard/selectors';

export function* fetchSurveys() {
  try {
    const actualSurveys = yield select(surveys);

    const params = {
      skip: actualSurveys.size,
      limit: 5,
    };

    const { data: fetchedSurveys } = yield call(axios, '/api/surveys', { params });
    const fetchedSurveysMap = arrToObject(fetchedSurveys);

    yield put(fetchSurveysSuccess(fetchedSurveysMap));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error occurred during fetching surveys', error);
  }
}
