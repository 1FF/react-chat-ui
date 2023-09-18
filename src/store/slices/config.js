import { createSlice } from '@reduxjs/toolkit';
import { config as initialState } from '@/store/initialState';

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    // DEV NOTE: note that immer makes these immutable under the hood
    // set App Config
    setConfig(state, { payload }) {
      console.log(payload);
      state.aiProfile = payload.aiProfile;
      state.themeId = payload.themeId;
    },
    // set App Config
    resetConfig(state) {
      state.aiProfile = initialState.aiProfile;
      state.themeId = initialState.themeId;
    },
    // set theme config
    setTheme(state, { payload }) {
      state.themeId = payload;
    },
    // reset theme config
    resetTheme(state) {
      state.themeId = initialState.themeId;
    },
  },
});

// DEV NOTE: the createSlice function automatically create both action creator functions
export const {
  setConfig, resetConfig,
  setTheme, resetTheme
} = configSlice.actions;
export default configSlice.reducer;
