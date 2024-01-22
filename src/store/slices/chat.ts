import produce from 'immer';
import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { AssistantHistoryDataFiller, PredefinedMessagePayload, UserHistoryDataFiller, SocketHistoryRecord, AssistantRecord } from '../../interfaces';
import { ChatState } from '../../interfaces/store';
import { chat as initialState } from '../initialState'
import { getQueryParam } from '../../utils';
import { getUnifiedSequence } from '../../config';
import { Definition, Roles } from '../../config/enums';
import { uuidV4 } from '../../utils';

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
    setExistingHistory(state, { payload }: PayloadAction<Array<SocketHistoryRecord>>) {
      return produce(state, (draft) => {

        // server has LESS data than frontend -> update the status to unsent
        if (state.historyIds.length > payload.length) {
          const unsentMessages = state.historyIds.filter(id => !payload.find(record => record.id === id));
          unsentMessages.forEach(id => (
            draft.historyData[id].content = draft.historyData[id].content.map(record => ({ ...record, sent: false, resend: true }))));
          return
        }

        draft.historyIds = payload.map(({ id }) => id);
        draft.historyData = payload.reduce((prev, current) => ({
          ...prev,
          [current.id]: fillMissingData(current)
        }), {});
      });
    },
    addPredefinedAssistantMessage(state, { payload }: PayloadAction<PredefinedMessagePayload>) {
      const id = uuidV4();
      return produce(state, (draft: Draft<ChatState>): void => {
        draft.historyIds.push(id);
        draft.historyData[id] = {
          id,
          role: Roles.assistant,
          content: [
            { type: Definition.text, text: payload.content, sequence: 1 },
            { type: Definition.buttons, buttons: payload.buttons || [], sequence: 2 }
          ]
        }
      });
    },
    fillAssistantHistoryData(state, { payload }: PayloadAction<AssistantHistoryDataFiller>) {
      return produce(state, (draft: Draft<ChatState>) => {
        const id = payload.id;

        if (!draft.historyData[id]) {
          draft.historyData[id] = { id, role: Roles.assistant, content: [] };
          draft.historyIds.push(id);
          return;
        }

        if (!payload.content) return;

        const dataType = payload.content.type;
        const data = { sequence: payload.sequence || 1, type: dataType, [dataType]: payload.content[payload.content.type] };

        const hasDuplicatedSequenceAndType = draft.historyData[id].content.some(record => record.sequence === data.sequence && record.type === data.type);

        if (hasDuplicatedSequenceAndType) {
          draft.historyData[id].content = getUnifiedSequence(draft.historyData[id].content as Array<AssistantRecord>, data);
          return;
        }

        draft.historyData[id].content.push(data);
      });
    },
    fillUserHistoryData(state, { payload }: PayloadAction<UserHistoryDataFiller>) {
      return produce(state, (draft: Draft<ChatState>) => {
        let belongsTo;

        if (payload.content.groupId) {
          Object.entries(draft.historyData).forEach(([key, value]) => {
            if (value.content.find(el => el.groupId === payload.content.groupId)) {
              belongsTo = key;
            }
          });
        }

        if (belongsTo) {
          // this is due to keyboard interaction we send messages after timeout
          const userMessageRecord = draft.historyData[belongsTo];
          userMessageRecord.content.push(payload.content);
          return;
        }

        if (!draft.historyData[payload.id]) {
          draft.historyData[payload.id] = { id: payload.id, role: Roles.user, content: [payload.content] };
          draft.historyIds.push(payload.id);
        }
      });
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
    hideResendIcon(state, { payload }: PayloadAction<{ itemId: string }>) {
      return produce(state, (draft: Draft<ChatState>) => {
        draft.historyData[payload.itemId].content = draft.historyData[payload.itemId].content.map(record => ({ ...record, sent: true, resend: false }));
      });
    },
    showResendIcon(state, { payload }: PayloadAction<{ itemId: string }>) {
      return produce(state, (draft: Draft<ChatState>) => {
        draft.historyData[payload.itemId].content = draft.historyData[payload.itemId].content.map(record => ({ ...record, sent: false, resend: true }));
      });
    },
    setLastGroupPointer(state, { payload }: PayloadAction<string>) {
      state.lastGroupId = payload;
    },
    resendMessage(state, { payload }) {
      // empty - used only to listen in the middleware for changes
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
export const sortBySequence = (a: AssistantRecord, b: AssistantRecord) => a.sequence - b.sequence;

export const {
  setOutgoing, resetOutgoing, setExistingHistory,
  addPredefinedAssistantMessage,
  setIsLoading, resetIsLoading, setLastGroupPointer,
  setTypingTimeoutExpired, setError, resetError,
  setConnected, setClosed, hideResendIcon, showResendIcon,
  resendMessage, setIsStreaming,
  fillAssistantHistoryData, fillUserHistoryData
} = configSlice.actions;

export default configSlice.reducer;


// this must be removed after data fields being unified;
// @ts-ignore;
const fillMissingData = (currentRecord) => {
  if (currentRecord.role === Roles.assistant) {
    return {
      // @ts-ignore;
      ...currentRecord, content: currentRecord.content.map(record => {
        if (record.sequence) {
          return record
        }
        return { ...record, sequence: Math.floor(Math.random() * 11) }
      })
    };
  }

  if (currentRecord.role == Roles.user) {
    return { ...currentRecord, content: [{ resend: false, sent: true, message: currentRecord.content }] }
  }
}
