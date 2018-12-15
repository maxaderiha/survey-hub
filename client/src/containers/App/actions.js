import { ActionTypes } from './constants';

export const fetchUser = () => ({
  type: ActionTypes.FETCH_USER,
});

export const setUserLoadingState = isUserLoading => ({
  type: ActionTypes.SET_USER_LOADING_STATE,
  payload: {
    isUserLoading,
  },
});

export const updateUser = user => ({
  type: ActionTypes.UPDATE_USER,
  payload: {
    user,
  },
});
