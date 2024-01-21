import { uid } from 'uid';
import produce from 'immer';
import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { ChatState, UserHistoryData, AssistantHistoryData, AssistantHistoryDataFiller, PredefinedMessagePayload, UserHistoryDataFiller, ButtonOptions, AssistantMessageTypeUnion } from '../../interfaces';
import { chat as initialState } from '../initialState'
import { getQueryParam } from '../../utils';
import { initialStructure, typeReducer } from '../../config';
import { Definition, Roles } from '../../config/enums';

const configSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOutgoing(state, { payload }: PayloadAction<string>) {
      state.outgoing = {
        term: getQueryParam(window.location.search, 'utm_chat') || '',
        user_id: localStorage.getItem('__cid') || '',
        role: Roles.user,
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
          [current.id]: current.role === Roles.user
            ? { ...current, content: [{ resend: false, sent: true, message: current.content }] }
            : current
        }), {});
      });
    },
    addPredefinedAssistantMessage(state, { payload }: PayloadAction<PredefinedMessagePayload>) {
      const id = uid();
      return produce(state, (draft: Draft<ChatState>): void => {
        draft.historyIds.push(id);
        draft.historyData[id] as AssistantHistoryData;
        draft.historyData[id] = {
          id,
          role: Roles.assistant,
          content: [
            { type: Definition.text, text: payload.content }
          ]
        }

        if (payload.buttons) {
          draft.historyData[id].content.push({ type: Definition.buttons, buttons: payload.buttons });
        }
      });
    },
    fillAssistantHistoryData(state, { payload }: PayloadAction<AssistantHistoryDataFiller>) {
      return produce(state, (draft: Draft<ChatState>) => {
        const id = payload.id;
        if (!draft.historyData[id]) {
          draft.historyData[id] = { id, role: Roles.assistant, content: [payload.content] };
          draft.historyIds.push(id);
          return;
        }


        // here we order items by sequence and accumulate the types into one object
        const dataType = payload.content.type;
        const data = { type: dataType, [dataType]: payload.content[dataType] };
        draft.historyData[id].content.push(data);

        const reducedText = draft.historyData[id].content
          .filter((obj) => obj.type === dataType)
          .reduce(typeReducer[dataType], initialStructure[dataType]);
        draft.historyData[id].content = [...draft.historyData[id].content.filter(it => it.type !== dataType), reducedText];
        draft.historyData[id].content.sort(sortBySequence);


      });
    },
    fillUserHistoryData(state, { payload }: PayloadAction<UserHistoryDataFiller>) {
      return produce(state, (draft: Draft<ChatState>) => {
        let belongsTo;

        if (payload.content.groupId) {
          Object.entries(draft.historyData).forEach(([key, value]) => {
            if (value.content.find(el => 'groupId' in el && el.groupId === payload.content.groupId)) {
              belongsTo = key;
            }
          });
        }

        if (belongsTo && payload.role === Roles.user) {
          // this is due to keyboard interaction we send messages after timeout
          const userMessageRecord = draft.historyData[belongsTo] as UserHistoryData;
          userMessageRecord.content.push(payload.content);
          return;
        }

        if (!draft.historyData[payload.id] && payload.role === Roles.user) {
          draft.historyData[payload.id] = { id: payload.id, role: Roles.user, content: [payload.content] };
          draft.historyIds.push(payload.id);
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

        if (item.role === Roles.user && !item.id) {
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
export const userMessageFindOne = (state: { chat: ChatState }) => state.chat.historyIds.find((historyId) => state.chat.historyData[historyId].role === Roles.user);
export const sortBySequence = (a: ButtonOptions, b: ButtonOptions) => a.sequence - b.sequence;

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
