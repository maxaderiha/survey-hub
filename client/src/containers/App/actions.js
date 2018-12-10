import { ActionTypes } from './constants';

export const fetchUser = () => ({
  type: ActionTypes.FETCH_USER,
});

export const updateUser = user => ({
  type: ActionTypes.UPDATE_USER,
  payload: {
    user,
  },
});
