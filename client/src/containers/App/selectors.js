import { createSelector } from 'reselect';

export const app = state => state.get('app');

export const user = createSelector(
  [app], app => app.get('user'),
);

export const isUserLoading = createSelector(
  [app], app => app.get('isUserLoading'),
);

export const isLoggedIn = createSelector(
  [user], user => !!user,
);

export const credits = createSelector(
  [user], user => user.get('credits'),
);