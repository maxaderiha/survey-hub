import { createSelector } from 'reselect';

export const dashboard = state => state.get('dashboard');

export const isSurveysLoading = createSelector(
  [dashboard], dashboard => dashboard.get('isSurveysLoading'),
);

export const surveys = createSelector(
  [dashboard], dashboard => dashboard
    .get('surveys')
    .sort((a, b) => new Date(b.get('sentDate')) - new Date(a.get('sentDate')))
    .toIndexedSeq()
);

export const isSurveysLoaded = createSelector(
  [dashboard], dashboard => dashboard.get('isSurveysLoaded'),
);
