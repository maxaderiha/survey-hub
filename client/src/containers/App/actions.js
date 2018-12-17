import { ActionTypes } from './constants';

export const fetchUser = () => ({
  type: ActionTypes.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = user => ({
  type: ActionTypes.FETCH_USER_SUCCESS,
  payload: {
    user,
  },
});
