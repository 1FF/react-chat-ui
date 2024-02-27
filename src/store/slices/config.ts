import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { config as initialState } from '../../store/initialState';
import { ConfigState } from '../../interfaces/store';
import { Theme } from '../../config/enums';

type ConfigProps = {
  aiProfile: {};
  translations: {};
  themeId: Theme.light | Theme.dark;
  chatUrl: string;
  closeVisible: boolean;
  purpose: string;
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig(state, { payload }: PayloadAction<ConfigProps>) {
      state.aiProfile = { ...initialState.aiProfile, ...payload.aiProfile };
      state.translations = { ...initialState.translations, ...payload.translations };
      // TODO check how close shall be set
      // state.close = { ...initialState.close, ...payload.close };
      state.themeId = payload.themeId;
      state.chatUrl = payload.chatUrl;
      state.closeVisible = payload.closeVisible;
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
} = configSlice.actions;
export default configSlice.reducer;
