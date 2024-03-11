import { createSlice } from '@reduxjs/toolkit';

import { IntentionsState } from '../../interfaces/store';
import { intentions as initialState } from '../initialState';

const intentionsSlice = createSlice({
  name: 'intentions',
  initialState,
  reducers: {
    setEmail(state, { payload }) {
      state.email.current = payload;
    },
    setEmailSuccess(state, { payload }) {
      state.email.success = payload;
    },
    setEmailError(state, { payload }) {
      state.email.error = payload;
    },
    setIsEmailLoading(state, { payload }) {
      state.email.isLoading = payload;
    },
    setIsPaymentButtonVisible(state, { payload }) {
      state.payment.isButtonVisible = payload;
    },
    setPaymentFormVisibility(state, { payload }) {
      state.payment.isFormVisible = payload;
    },
    setIsPaymentSuccessful(state, { payload }) {
      state.payment.isSuccessful = payload;
    },
    setPaymentIntentError(state, { payload }) {
      state.payment.error = payload;
    },
    setLink(state, { payload }) {
      state.link = payload;
    },
  },
});

export const getEmailIntentions = (state: { intentions: IntentionsState }) => state.intentions.email;
export const getPaymentIntentions = (state: { intentions: IntentionsState }) => state.intentions.payment;
export const getPaymentSuccess = (state: { intentions: IntentionsState }) => state.intentions.payment.isSuccessful;
export const getLinkIntentions = (state: { intentions: IntentionsState }) => state.intentions.link;

export const {
  setEmailSuccess,
  setIsPaymentSuccessful,
  setPaymentFormVisibility,
  setEmailError,
  setIsEmailLoading,
  setIsPaymentButtonVisible,
  setPaymentIntentError,
  setEmail,
  setLink
} = intentionsSlice.actions;

export default intentionsSlice.reducer;
