import { ActionTypes } from './constants';

export const fetchUser = () => ({
  type: ActionTypes.FETCH_USER,
});

export const createUser = (user) => ({
  type: ActionTypes.CREATE_USER,
  payload: {
    user,
  },
});
