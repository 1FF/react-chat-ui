import { createSlice } from '@reduxjs/toolkit';
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
    setIsEmailFormVisible(state, { payload }) {
      state.email.isFormVisible = payload;
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
      state.link = { ...state.link, ...payload };
    },
    // Response Form reducers
    setResponse(state, { payload }) {
      state.response.value = payload;
    },
    setResponseFormVisibility(state, { payload }) {
      if (payload.isFormVisible !== undefined) {
        state.response.isFormVisible = payload.isFormVisible;
        return;
      }
      state.response.isFormVisible = !payload.intentions.link.isVisible && !payload.intentions.email.isFormVisible && !payload.intentions.payment.isFormVisible && !payload.intentions.payment.isButtonVisible && payload.options.length === 0;
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
  setResponseLoadingStatus, setPaymentIntentError
} = intentionsSlice.actions;

export default intentionsSlice.reducer;
