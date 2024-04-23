import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

import { getUnifiedSequence } from '../../config';
import { Definition, Roles } from '../../config/enums';
import {
  AssistantHistoryDataFiller,
  AssistantHistoryInitialMessage,
  AssistantRecord,
  MessageProperties,
  PredefinedMessagePayload,
  SocketHistoryRecord,
  UserHistoryDataFiller,
} from '../../interfaces';
import { ChatState } from '../../interfaces/store';
import { formatDateByLocale, getQueryParam, uuidV4 } from '../../utils';
import { chat as initialState } from '../initialState';

const configSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOutgoing(state, { payload }: PayloadAction<string>) {
      state.outgoing = {
        term: getQueryParam(),
        user_id: localStorage.getItem('__cid') || '',
        role: Roles.user,
        message: payload,
      };
    },
    resetOutgoing(state) {
      state.outgoing = initialState.outgoing;
    },
    initiateThread(state, { payload: { threadId } }) {
      return produce(state, (draft) => {
        if (!draft.record[threadId]) {
          draft.record[threadId] = {
            historyIds: [],
            historyData: {},
          };
          draft.thread[getQueryParam()] = threadId;
        }
      });
    },
    syncMessageStatus(state, { payload: { term, history } }) {
      if (term !== getQueryParam()) {
        return;
      }
      const thread = state.thread[term];

      return produce(state, (draft) => {
        const unsentMessages = draft.record[thread].historyIds.filter(
          (id) => !history.find((record: SocketHistoryRecord) => record.id === id),
        );
        unsentMessages.forEach(
          (id) =>
            (draft.record[thread].historyData[id].content = draft.record[thread].historyData[id].content.map(
              (record) => ({
                ...record,
                sent: false,
                resend: true,
              }),
            )),
        );
      });
    },
    updateHistoryByTerm(
      state,
      { payload: { history, term } }: PayloadAction<{ history: Array<SocketHistoryRecord>; term: string }>,
    ) {
      if (term !== getQueryParam()) {
        return;
      }

      return produce(state, (draft) => {
        const serverIds = history.map(({ id }) => id);
        const thread = draft.thread[term];
        const clientIds = draft.record[thread].historyIds;

        // DEV NOTE: here i search for ids that are not recorded in the client
        for (let i = 0; i < serverIds.length; i++) {
          const currentId = serverIds[i];
          if (!clientIds.includes(currentId)) {
            clientIds.splice(i, 0, currentId);
            draft.record[thread].historyData[currentId] = history[i];
          }
        }

        draft.record[thread].historyIds = clientIds;
      });
    },
    addPredefinedAssistantMessage(state, { payload }: PayloadAction<PredefinedMessagePayload>) {
      return produce(state, (draft: Draft<ChatState>): void => {
        const id = uuidV4();
        const thread = draft.thread[getQueryParam()];

        draft.record[thread].historyIds.push(id);
        draft.record[thread].historyData[id] = {
          id,
          role: Roles.assistant,
          content: [
            { type: Definition.text, text: payload.content, sequence: 1 },
            { type: Definition.buttons, buttons: payload.buttons || [], sequence: 2 },
          ],
        };
      });
    },
    fillAssistantHistoryData(
      state,
      { payload: { id, content, sequence, term } }: PayloadAction<AssistantHistoryDataFiller>,
    ) {
      return produce(state, (draft: Draft<ChatState>) => {
        const thread = state.thread[term];

        if (draft.record[thread] && !draft.record[thread].historyData[id]) {
          draft.record[thread].historyData[id] = { id, role: Roles.assistant, content: [] };
          draft.record[thread].historyIds.push(id);
          return;
        }

        if (!content) {
          return;
        }

        const data = {
          sequence: sequence || 1,
          type: content.type,
          [content.type]: content[content.type],
        };

        // check for duplicates and unite them
        if (
          draft.record[thread].historyData[id].content.some(
            (record) => record.sequence === data.sequence && record.type === data.type,
          )
        ) {
          draft.record[thread].historyData[id].content = getUnifiedSequence(
            draft.record[thread].historyData[id].content as Array<AssistantRecord>,
            data,
          );
          return;
        }

        draft.record[thread].historyData[id].content.push(data);
      });
    },
    fillUserHistoryData(state, { payload: { id, content, term } }: PayloadAction<UserHistoryDataFiller>) {
      return produce(state, (draft: Draft<ChatState>) => {
        let belongsTo;
        const thread = state.thread[term];

        if (content.groupId && draft.record[thread]?.historyData) {
          Object.entries(draft.record[thread].historyData).forEach(([key, value]) => {
            if ([...value.content].find((el) => el.groupId === content.groupId)) {
              belongsTo = key;
            }
          });
        }

        if (belongsTo) {
          // this is due to keyboard interaction we send messages after timeout
          const userMessageRecord = draft.record[thread].historyData[belongsTo];
          userMessageRecord.content.push(content);
          return;
        }

        if (!draft.record[thread].historyData[id]) {
          draft.record[thread].historyData[id] = { id, role: Roles.user, content: [content] };
          draft.record[thread].historyIds.push(id);
        }
      });
    },
    fillInitialMessage(
      state,
      { payload: { message, term } }: PayloadAction<{ message: AssistantHistoryInitialMessage; term: string }>,
    ) {
      const currentTerm = getQueryParam();
      if (term !== currentTerm) {
        return;
      }

      const thread = state.thread[term];

      state.record[thread].historyIds.push(message.id);
      state.record[thread].historyData[message.id] = {
        id: message.id,
        role: Roles.assistant,
        time: new Date().getTime(),
        content: message.content,
      };
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    resetIsLoading(state) {
      state.isLoading = initialState.isLoading;
    },
    setTypingTimeoutExpired(state, { payload }: PayloadAction<boolean>) {
      state.typingTimeoutExpired = payload;
    },
    setConnected(state, { payload }: PayloadAction<boolean>) {
      state.connected = payload;
    },
    setClosed(state) {
      state.closed = true;
    },
    showResendIcon(state, { payload }: PayloadAction<{ itemId: string }>) {
      const term = getQueryParam();
      return produce(state, (draft: Draft<ChatState>) => {
        const thread = state.thread[term];

        draft.record[thread].historyData[payload.itemId].content = draft.record[thread].historyData[
          payload.itemId
        ].content.map((record) => ({
          ...record,
          sent: false,
          resend: true,
        }));
      });
    },
    setLastGroupPointer(state, { payload }: PayloadAction<string>) {
      state.lastGroupId = payload;
    },
    resendMessage(state, { payload }: PayloadAction<{ itemId: string }>) {
      const term = getQueryParam();
      return produce(state, (draft: Draft<ChatState>) => {
        const thread = state.thread[term];

        draft.record[thread].historyData[payload.itemId].content = draft.record[thread].historyData[
          payload.itemId
        ].content.map((record) => ({
          ...record,
          sent: true,
          resend: false,
        }));
      });
    },
    setError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
    resetError(state) {
      state.error = initialState.error;
    },
    setIsStreaming(state, { payload }: PayloadAction<boolean>) {
      state.isStreaming = payload;
    },
    resetHistory(state, { payload: { term, thread } }) {
      const currentTerm = getQueryParam();

      if (currentTerm !== term) {
        return;
      }

      state.record[thread] = { historyData: {}, historyIds: [] };
    },
  },
});

const getThreadId = (state: { chat: ChatState }) => state.chat.thread[getQueryParam()];

export const getChat = (state: { chat: ChatState }) => state.chat;

export const getHistoryIds = (state: { chat: ChatState }) => {
  return state.chat.record[getThreadId(state)]?.historyIds;
};

export const userMessageFindOne = (state: { chat: ChatState }) => {
  const threadId = getThreadId(state);
  return getHistoryIds(state).find(
    (historyId) => state.chat.record[threadId].historyData[historyId].role === Roles.user,
  );
};

export const getFirstMessageTime = (state: { chat: ChatState }) => {
  const threadId = getThreadId(state);
  const historyIds = getHistoryIds(state);
  return formatDateByLocale(state.chat.record[threadId]?.historyData[historyIds[0]]?.time || new Date().getTime());
};

export const getLastHistoryId = (state: { chat: ChatState }) =>
  [...state.chat.record[getThreadId(state)].historyIds].pop();

export const getRecordById = (itemId: string) => {
  return (state: { chat: ChatState }) => {
    return state.chat.record[getThreadId(state)].historyData[itemId];
  };
};

export const sortBySequence = (a: MessageProperties, b: MessageProperties) => {
  if (a.sequence && b.sequence) {
    return a.sequence - b.sequence;
  }

  return 0;
};

export const {
  setOutgoing,
  resetOutgoing,
  updateHistoryByTerm,
  addPredefinedAssistantMessage,
  setIsLoading,
  resetIsLoading,
  setLastGroupPointer,
  setTypingTimeoutExpired,
  setError,
  resetError,
  setConnected,
  setClosed,
  showResendIcon,
  resendMessage,
  setIsStreaming,
  fillAssistantHistoryData,
  fillUserHistoryData,
  resetHistory,
  fillInitialMessage,
  initiateThread,
  syncMessageStatus,
} = configSlice.actions;

export default configSlice.reducer;
