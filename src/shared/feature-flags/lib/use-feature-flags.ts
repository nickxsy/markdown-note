import { useAppSelector } from '@/shared/lib/redux';

import { featureStore } from '../model/feature-flags.store';
import type { FeatureFlags } from '../model/types';

export function useFeatureFlag(featureFlag: keyof FeatureFlags): boolean {
  return useAppSelector(state =>
    featureStore.selectors.selectFeatureFlag(state, featureFlag)
  );
}
