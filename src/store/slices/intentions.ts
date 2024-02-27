import { createSlice, Draft } from '@reduxjs/toolkit';
import produce from 'immer';
import { intentions as initialState } from '../initialState';
import { IntentionsState } from '../../interfaces/store';
import { Definition } from '../../config/enums';
import { AssistantMessageTypeUnion } from '../../interfaces';

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
      state.link = { ...state.link, ...payload };
    },
    // TODO check if this action is needed
    setResponse(state, { payload }) {
      //   state.response.value = payload;
    },
    // TODO check if this action is needed
    setResponseFormVisibility(state, { payload }) {
      //   return produce(state, (draft: Draft<IntentionsState>) => {
      //     draft.response.isFormVisible = !payload.some((el: AssistantMessageTypeUnion) => [Definition.buttons, Definition.payment, Definition.email].includes(el.type));
      //     draft.email.isFormVisible = payload.some((el: AssistantMessageTypeUnion) => Definition.email in el && el.type === Definition.email);
      //     draft.payment.isButtonVisible = payload.some((el: AssistantMessageTypeUnion) => Definition.payment in el && el.type === Definition.payment);
      //   })
    },
    setResponseLoadingStatus(state, { payload }) {
      //   state.response.isLoading = payload;
    },
  },
});

export const getEmailIntentions = (state: { intentions: IntentionsState }) => state.intentions.email;
export const getPaymentIntentions = (state: { intentions: IntentionsState }) => state.intentions.payment;
export const getPaymentSuccess = (state: { intentions: IntentionsState }) => state.intentions.payment.isSuccessful;
export const getLinkIntentions = (state: { intentions: IntentionsState }) => state.intentions.link;
export const getResponseIntentions = (state: { intentions: IntentionsState }) => state.intentions.response;

export const {
  setEmailSuccess,
  setIsPaymentSuccessful,
  setPaymentFormVisibility,
  setEmailError,
  setIsEmailLoading,
  setIsPaymentButtonVisible,
  setResponse,
  setResponseLoadingStatus,
  setPaymentIntentError,
  setEmail,
} = intentionsSlice.actions;

export default intentionsSlice.reducer;
