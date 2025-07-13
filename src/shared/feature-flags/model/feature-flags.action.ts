import type { Dispatch } from '@reduxjs/toolkit';

import { FEATURE_FLAG_KEY, featureFlagsSlice } from './feature-flags.store';
import type { FeatureFlags } from './types';

export const initializeFeatureFlags = () => async (dispatch: Dispatch) => {
  try {
    const featureFlagsFromApi = await new Promise<FeatureFlags>(resolve => {
      setTimeout(() => {
        resolve({
          darkTheme: false,
          deleteNote: false,
          editNote: false
        });
      }, 1000);
    });

    const featureFlagsFromLocalStorage = JSON.parse(
      localStorage.getItem(FEATURE_FLAG_KEY) ?? '{}'
    ) as Partial<FeatureFlags>;

    const newFeatureFlags = {
      ...featureFlagsFromApi,
      ...featureFlagsFromLocalStorage
    } as FeatureFlags;

    dispatch(featureFlagsSlice.actions.setFeatureFlags(newFeatureFlags));
  } catch (error) {
    console.error('Failed to initialize feature flags:', error);
  }
};
