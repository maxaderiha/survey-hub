import { ActionTypes } from './constants';

export const savePaymentToken = token => ({
  type: ActionTypes.SAVE_PAYMENT_TOKEN,
  payload: {
    token,
  },
});
