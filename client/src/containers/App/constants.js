import { addNamespace } from 'common/utils/addNamespace';

export const ActionTypes = addNamespace(
  {
    FETCH_USER_REQUEST: null,
    FETCH_USER_SUCCESS: null,
  },
  'App',
);
