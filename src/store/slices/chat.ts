import { uid } from 'uid';
import produce from 'immer';
import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { ChatState, UserHistoryData, AssistantHistoryData, MessageType, PredefinedMessagePayload, TextMessage } from '../../interfaces';
import { chat as initialState } from '../initialState'
import { getQueryParam } from '../../utils';
import { initialStructure, roles, typeReducer } from '../../config';

const configSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOutgoing(state, { payload }: PayloadAction<string>) {
      state.outgoing = {
        term: getQueryParam(window.location.search, 'utm_chat') || '',
        user_id: localStorage.getItem('__cid') || '',
        role: roles.user,
        message: payload,
      };
    },
    resetOutgoing(state) {
      state.outgoing = initialState.outgoing;
    },
    pushQueue(state, { payload }: PayloadAction<{ groupId: string; content: string }>) {
      const notInQueue = !state.queue.find(it => it.groupId === payload.groupId || it.content === payload.content);
      if (notInQueue) state.queue.push(payload);
    },
    removeFromQueue(state, { payload }: PayloadAction<{ groupId: string; content: string }>) {
      state.queue = state.queue.filter(it => it.groupId !== payload.groupId || it.content !== payload.content) || [];
    },
    setExistingHistory(state, { payload }: PayloadAction<Array<UserHistoryData> | Array<AssistantHistoryData>>) {
      return produce(state, (draft) => {
        draft.historyIds = payload.map((item) => item.id);
        draft.historyData = payload.reduce((prev, current) => ({
          ...prev,
          [current.id]: current.role === 'user' ? [{ ...current, resend: false, sent: true }] : current.content
        }), {});
      });
    },
    addPredefinedAssistantMessage(state, { payload }: PayloadAction<PredefinedMessagePayload>) {
      const id = uid();
      return produce(state, (draft: Draft<ChatState>): void => {
        draft.historyIds.push(id);

        draft.historyData[id] = [
          { type: 'text', text: payload.content, role: roles.assistant, sequence: 1, id },
        ];

        payload.buttons && draft.historyData[id].push({ type: 'buttons', buttons: payload.buttons, role: roles.assistant, sequence: 2, id })
      });
    },
    fillAssistantHistoryData(state, { payload }: PayloadAction<MessageType>) {
      const data = { ...payload };
      return produce(state, (draft: Draft<ChatState>): void => {
        if (!draft.historyData[payload.id]) {
          draft.historyData[payload.id] = [data];
          draft.historyIds.push(payload.id);
        } else {
          // here we order items by sequence and accumulate the types into one object
          draft.historyData[payload.id].push(data);
          const reducedText = draft.historyData[payload.id]
            .filter((obj) => obj.type === payload.type)
            .reduce(typeReducer[payload.type], initialStructure[payload.type] as MessageType);
          draft.historyData[payload.id] = [...draft.historyData[payload.id].filter(it => it.type !== payload.type), reducedText];
          draft.historyData[payload.id].sort((a, b) => a.sequence - b.sequence);
        }
      });
    },
    fillUserHistoryData(state, { payload }: PayloadAction<{ content: string, groupId?: string }>) {
      const id = uid();
      const content = { role: roles.user, content: payload.content, groupId: payload.groupId, resend: false, sent: true };
      return produce(state, (draft) => {
        let belongsTo;

        if (payload.groupId) {
          Object.entries(draft.historyData).forEach(([key, value]) => {
            if (value.find(el => el.groupId === payload.groupId)) {
              belongsTo = key;
            }
          });
        }

        if (belongsTo) {
          //@ts-ignore
          draft.historyData[belongsTo].push(content);
          return;
        }

        if (!draft.historyData[id]) {
          //@ts-ignore must find a way to refactor the data so it is unified
          draft.historyData[id] = [content];
          draft.historyIds.push(id);
        }
      });
    },
    // TODO i don't know if we are going to use it; those below
    setLastQuestionId(state, { payload }: PayloadAction<string>) {
      // state.history = state.history.map((item: HistoryItem) => {
      //   if (!item.id) {
      //     item.id = payload;
      //   }
      //   return item;
      // });
    },
    setQueuedId(state, { payload }: PayloadAction<{ groupId: string; id: string, content: string }>) {
      // state.history = state.history.map((item: HistoryItem) => {
      //   if (!item.id && item.groupId === payload.groupId) {
      //     item.id = payload.id;
      //   }
      //   if (!item.id && item.content === payload.content) {
      //     item.id = payload.id;
      //   }
      //   return item;
      // });
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
    updateResendStatus(state, { payload }: PayloadAction<{ groupId: string; content: string; resend: boolean; sent: boolean }>) {
      state.history = state.history.map(item => {
        if (!item.id && payload.groupId === item.groupId) {
          item = { ...item, resend: payload.resend, sent: payload.sent };
        }
        if (!item.id && payload.content === item.content) {
          item = { ...item, resend: payload.resend, sent: payload.sent };
        }
        return item;
      });
    },
    showResendStatus(state) {
      // TODO check error handling so that it is as it was on master maybe history will be deprecated
      state.history = state.history.map((item, index, array) => {
        if (index === array.length - 1) {
          item = { ...item, resend: true, sent: false };
        }

        if (item.role === roles.user && !item.id) {
          item = { ...item, resend: true, sent: false };
        }

        return item;
      });
    },
    setLastGroupPointer(state, { payload }: PayloadAction<string>) {
      state.lastGroupId = payload;
    },
    resendMessage(state, { payload }) {
      state.history = state.history.map(item => item);
    },
    setError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
    resetError(state) {
      state.error = initialState.error;
    },
    setIsStreaming(state, { payload }: PayloadAction<boolean>) {
      state.isStreaming = payload;
    }
  },
});

export const getChat = (state: { chat: ChatState }) => state.chat;

export const {
  setOutgoing, resetOutgoing, setExistingHistory,
  addPredefinedAssistantMessage,
  setIsLoading, resetIsLoading, setLastGroupPointer,
  setTypingTimeoutExpired, setError, resetError,
  setConnected, setClosed, updateResendStatus,
  resendMessage, setLastQuestionId, showResendStatus,
  pushQueue, removeFromQueue, setQueuedId, setIsStreaming,
  fillAssistantHistoryData, fillUserHistoryData
} = configSlice.actions;

export default configSlice.reducer;
