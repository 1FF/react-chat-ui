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
    setIsEmailFieldVisible(state, { payload }) {
      state.email.isEmailFieldVisible = payload;
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
  }
});

export const getEmailIntentions = state => state.intentions.email;

export const { setEmail, setEmailSuccess, setIsPaymentSuccessful, setPaymentFormVisibility, setEmailError, setIsEmailLoading, setIsEmailFieldVisible, setIsPaymentButtonVisible } = intentionsSlice.actions;
export default intentionsSlice.reducer;
