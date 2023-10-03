import { createSlice } from '@reduxjs/toolkit';
import { config as initialState } from '@/store/initialState';

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    // DEV NOTE: note that immer makes these immutable under the hood
    setConfig(state, { payload }) {
      state.aiProfile = { ...initialState.aiProfile, ...payload.aiProfile };
      state.themeId = payload.themeId;
    },
    resetConfig(state) {
      state.aiProfile = initialState.aiProfile;
      state.themeId = initialState.themeId;
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
  },
});

export const getConfig = ({ config }) => config;
export const getDevToolsStatus = ({ config }) => config.devToolsEnabled;

// DEV NOTE: the createSlice function automatically create both action creator functions
export const {
  setConfig, resetConfig,
  setTheme, resetTheme,
  setDevToolsStatus, resetDevToolsStatus,
} = configSlice.actions;
export default configSlice.reducer;
