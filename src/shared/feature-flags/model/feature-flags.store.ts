import {
  type PayloadAction,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';

import { createBaseSelector, registerSlice } from '@/shared/lib/redux';

import type { FeatureFlags } from './types';

const initialState: FeatureFlags = {
  darkTheme: false,
  deleteNote: false,
  editNote: false
};

export const FEATURE_FLAG_KEY = 'featureFlag';

export const featureFlagsSlice = createSlice({
  name: 'featureFlags',
  initialState,
  reducers: {
    toggleFeatureFlag: (state, action: PayloadAction<keyof FeatureFlags>) => {
      state[action.payload] = !state[action.payload];

      localStorage.setItem(FEATURE_FLAG_KEY, JSON.stringify(state));
      console.log(localStorage);
    },
    setFeatureFlags: (state, action: PayloadAction<Partial<FeatureFlags>>) => {
      Object.assign(state, action.payload);
      localStorage.setItem(FEATURE_FLAG_KEY, JSON.stringify(state));
    }
  }
});

const featureFlagsBaseSelector = createBaseSelector(featureFlagsSlice);

export const featureFlagsSelectors = {
  selectDarkTheme: createSelector(featureFlagsBaseSelector, s => s.darkTheme),
  selectDeleteNote: createSelector(featureFlagsBaseSelector, s => s.deleteNote),
  selectEditNote: createSelector(featureFlagsBaseSelector, s => s.editNote),
  selectFeatureFlag: createSelector(
    featureFlagsBaseSelector,
    (_: unknown, flag: keyof FeatureFlags) => flag,
    (state, flag): boolean => state[flag]
  )
};

registerSlice([featureFlagsSlice]);

export const featureStore = {
  actions: {
    ...featureFlagsSlice.actions
  },
  selectors: featureFlagsSelectors
};
