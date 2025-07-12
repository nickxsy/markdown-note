import { createSelector, createSlice } from '@reduxjs/toolkit';

import { createBaseSelector, registerSlice } from '@/shared/lib/redux';

import type { Theme } from './types';

const THEME_KEY = 'theme';

const initialState = {
  theme: (localStorage.getItem(THEME_KEY) as Theme) || 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', state.theme === 'dark');
      localStorage.setItem(THEME_KEY, state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      document.documentElement.classList.toggle('dark', state.theme === 'dark');
      localStorage.setItem(THEME_KEY, state.theme);
    }
  }
});

const themeBaseSelector = createBaseSelector(themeSlice);

const selectTheme = createSelector(themeBaseSelector, s => s.theme);

registerSlice([themeSlice]);

export const themeStore = {
  actions: {
    toggleTheme: themeSlice.actions.toggleTheme,
    setTheme: themeSlice.actions.setTheme
  },
  selectors: {
    selectTheme
  }
};
