import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ConfigState, MediaModalProps } from '../../interfaces/store';
import { config as initialState } from '../../store/initialState';

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig(state, { payload }: PayloadAction<ConfigState>) {
      state.aiProfile = { ...initialState.aiProfile, ...payload.aiProfile };
      state.translations = { ...initialState.translations, ...payload.translations };
      state.close = { ...initialState.close, ...payload.close };
      state.themeId = payload.themeId;
      state.chatUrl = payload.chatUrl;
      state.purpose = payload.purpose;
    },
    setSpecialUrls(state, { payload }) {
      state.specialUrls = { ...state.specialUrls, ...payload };
    },
    setPurpose(state, { payload }) {
      state.purpose = payload;
    },
    resetConfig(state) {
      state.aiProfile = initialState.aiProfile;
      state.themeId = initialState.themeId;
      state.translations = initialState.translations;
      state.chatUrl = initialState.chatUrl;
    },
    setTheme(state, { payload }) {
      state.themeId = payload;
    },
    resetTheme(state) {
      state.themeId = initialState.themeId;
    },
    setDevToolsStatus(state, { payload }) {
      state.enableDevTools = payload;
    },
    resetDevToolsStatus(state) {
      state.enableDevTools = initialState.enableDevTools;
    },
    togglePluginMode(state) {
      state.isPluginMode = !state.isPluginMode;
    },
    setTranslations(state, { payload }) {
      state.translations = { ...state.translations, ...payload };
    },
    setMediaModal(state, { payload: { isVisible, code, title, image } }: PayloadAction<MediaModalProps>) {
      state.mediaModal = { isVisible, code, title, image };
    },
    resetMediaModal(state) {
      state.mediaModal = initialState.mediaModal;
    },
  },
});

export const getConfig = (state: { config: ConfigState }) => state.config;
export const getDevToolsStatus = (state: { config: ConfigState }) => state.config.enableDevTools;

export const {
  setConfig,
  resetConfig,
  setTheme,
  resetTheme,
  setDevToolsStatus,
  resetDevToolsStatus,
  togglePluginMode,
  setTranslations,
  setPurpose,
  setSpecialUrls,
  setMediaModal,
  resetMediaModal
} = configSlice.actions;
export default configSlice.reducer;
