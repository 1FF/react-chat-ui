import { uid } from 'uid';
import produce from 'immer';
import { createSlice } from '@reduxjs/toolkit';
import { chat as initialState } from '@/store/initialState';
import { getQueryParam } from '@/utils';
import { initialStructure, roles, typeReducer } from '@/config';

const configSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOutgoing(state, { payload }) {
      state.outgoing = {
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: roles.user,
        message: payload,
      };
    },
    resetOutgoing(state) {
      state.outgoing = initialState.outgoing;
    },
    pushQueue(state, { payload }) {
      const notFound = !state.queue.find(it => it.groupId === payload.groupId || it.content === payload.content);
      if (notFound) state.queue.push(payload);
    },
    removeFromQueue(state, { payload }) {
      state.queue = state.queue.filter(it => it.groupId !== payload.groupId || it.content !== payload.content) || [];
    },
    setExistingHistory(state, { payload }) {
      return produce(state, (draft) => {
        draft.historyIds = payload.map(item => item.id);
        draft.historyData = payload.reduce((prev, current) => ({
          ...prev,
          [current.id]: current.role === 'user' ? [{ ...current, resend: false, sent: true }] : current.content
        }), {});
      });
    },
    addPredefinedAssistantMessage(state, { payload }) {
      const id = uid();
      return produce(state, (draft) => {
        draft.historyIds.push(id);
        draft.historyData[id] = [
          { type: 'text', text: payload.content, role: roles.assistant },
          { type: 'buttons', buttons: payload.buttons, role: roles.assistant }
        ];
      });
    },
    fillAssistantHistoryData(state, { payload }) {
      const data = { role: roles.assistant, ...payload };
      return produce(state, (draft) => {
        if (!draft.historyData[payload.id]) {
          draft.historyData[payload.id] = [data];
          draft.historyIds.push(payload.id);
        } else {
          // here we order items by sequence and accumulate the types into one object
          draft.historyData[payload.id].push(data);
          const reducedText = draft.historyData[payload.id]
            .filter((obj) => obj.type === payload.type)
            .reduce(typeReducer[payload.type], initialStructure[payload.type]);

          draft.historyData[payload.id] = [...draft.historyData[payload.id].filter(it => it.type !== payload.type), reducedText];
          draft.historyData[payload.id].sort((a, b) => a.sequence - b.sequence);
        }
      });
    },
    fillUserHistoryData(state, { payload }) {
      const id = uid();
      const content = { role: roles.user, content: payload.content, groupId: payload.groupId, resend: false, sent: true, };
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
          draft.historyData[belongsTo].push(content);
          return;
        }

        if (!draft.historyData[id]) {
          draft.historyData[id] = [content];
          draft.historyIds.push(id);
        }
      });
    },
    setLastQuestionId(state, { payload }) {
      state.history = state.history.map(item => {
        if (!item.id) {
          item.id = payload;
        }
        return item;
      });
    },
    setQueuedId(state, { payload }) {
      state.history = state.history.map(item => {
        if (!item.id && item.groupId === payload.groupId) {
          item.id = payload.id;
        }
        if (!item.id && item.content === payload.content) {
          item.id = payload.id;
        }
        return item;
      });
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    resetIsLoading(state) {
      state.isLoading = initialState.isLoading;
    },
    setTypingTimeoutExpired(state, { payload }) {
      state.typingTimeoutExpired = payload;
    },
    setConnected(state, { payload }) {
      state.connected = payload;
    },
    setClosed(state) {
      state.closed = true;
    },
    updateResendStatus(state, { payload }) {
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
    setLastGroupPointer(state, { payload }) {
      state.lastGroupId = payload;
    },
    resendMessage(state, { payload }) {
      state.history = state.history.map(item => item);
    },
    setError(state, { payload }) {
      state.error = payload;
    },
    resetError(state) {
      state.error = initialState.error;
    },
    setIsStreaming(state, { payload }) {
      state.isStreaming = payload;
    }
  },
});

export const getChat = state => state.chat;

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
