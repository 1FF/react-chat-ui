import { createSlice } from '@reduxjs/toolkit';
import { intentions as initialState } from '../initialState';

const intentionsSlice = createSlice({
  name: 'intentions',
  initialState,
  reducers: {
    setEmail(state, { payload }) {
      state.email.currentEmail = payload;
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
    setIsEmailFormVisible(state, { payload }) {
      state.email.isFormVisible = payload;
    },
    setIsPaymentButtonVisible(state, { payload }) {
      state.payment.isPaymentButtonVisible = payload;
    },
    setPaymentFormVisibility(state, { payload }) {
      state.payment.isPaymentFormVisible = payload;
    },
    setIsPaymentSuccessful(state, { payload }) {
      state.payment.isPaymentSuccessful = payload;
    },
    setLink(state, { payload }) {
      state.link = { ...state.link, ...payload };
    },
    // Response Form reducers
    setResponse(state, { payload }) {
      state.response.value = payload;
    },
    setResponseFormVisibility(state, { payload }) {
      state.response.isFormVisible = payload;
    },
    setResponseLoadingStatus(state, { payload }) {
      state.response.isLoading = payload;
    },
  }
});

export const getEmailIntentions = state => state.intentions.email;
export const getPaymentIntentions = state => state.intentions.payment;
export const getLinkIntentions = state => state.intentions.link;
export const getResponseIntentions = state => state.intentions.response;

export const { setEmail, setEmailSuccess,
  setIsPaymentSuccessful, setPaymentFormVisibility,
  setEmailError, setIsEmailLoading,
  setIsEmailFormVisible, setIsPaymentButtonVisible,
  setLink, setResponse, setResponseFormVisibility,
  setResponseLoadingStatus,
} = intentionsSlice.actions;

export default intentionsSlice.reducer;
