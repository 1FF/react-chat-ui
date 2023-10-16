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
  }
});

export const getEmailIntentions = state => state.intentions.email;

export const { setEmail, setEmailSuccess, setEmailError, setIsEmailLoading, setIsEmailFieldVisible } = intentionsSlice.actions;
export default intentionsSlice.reducer;
