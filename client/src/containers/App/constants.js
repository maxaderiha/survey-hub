import { addNamespace } from 'common/utils/addNamespace';

export const ActionTypes = addNamespace(
  {
    FETCH_USER: null,
    SET_USER_LOADING_STATE: null,
    UPDATE_USER: null,
  },
  'App',
);
