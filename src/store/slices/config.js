import { createSlice } from '@reduxjs/toolkit';
import { config as initialState } from '@/store/initialState';

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    // DEV NOTE: note that immer makes these immutable under the hood
    setConfig(state, { payload }) {
      state.aiProfile = payload.aiProfile;
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
    enableDevTools(state) {
      state.devToolsEnabled = true;
    },
    disableDevTools(state) {
      state.devToolsEnabled = false;
    }
  },
});

export const getConfig = ({ config }) => config;

// DEV NOTE: the createSlice function automatically create both action creator functions
export const {
  setConfig, resetConfig,
  setTheme, resetTheme,
  enableDevTools, disableDevTools
} = configSlice.actions;
export default configSlice.reducer;
