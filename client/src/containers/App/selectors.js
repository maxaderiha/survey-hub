import { createSelector } from 'reselect';

export const app = state => state.get('app');

export const user = createSelector(
  [app], app => app.get('user'),
);

export const isUserLoading = createSelector(
  [app], app => app.get('isUserLoading'),
);
