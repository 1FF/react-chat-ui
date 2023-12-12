import { createSlice } from '@reduxjs/toolkit';
import { config as initialState } from '@/store/initialState';

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig(state, { payload }) {
      state.aiProfile = { ...initialState.aiProfile, ...payload.aiProfile };
      state.translations = { ...initialState.translations, ...payload.translations };
      state.themeId = payload.themeId;
      state.chatUrl = payload.chatUrl;
      state.closeVisible = payload.closeVisible;
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
  }
});

export const getConfig = ({ config }) => config;
export const getDevToolsStatus = ({ config }) => config.devToolsEnabled;

// DEV NOTE: the createSlice function automatically create both action creator functions
export const {
  setConfig, resetConfig,
  setTheme, resetTheme,
  setDevToolsStatus, resetDevToolsStatus,
  togglePluginMode, setTranslations,
} = configSlice.actions;
export default configSlice.reducer;
