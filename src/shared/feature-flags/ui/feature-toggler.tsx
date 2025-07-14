import { SettingsIcon } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/ui/dialog';

import { featureStore } from '../model/feature-flags.store';
import type { FeatureFlags } from '../model/types';

import { FeatureTogglerCheckbox } from './feature-toggler-checkbox';

const FEATURE_FLAGS: Array<keyof FeatureFlags> = [
  'darkTheme',
  'deleteNote',
  'editNote'
];

export function FeatureToggler() {
  const dispatch = useAppDispatch();

  const darkTheme = useAppSelector(state =>
    featureStore.selectors.selectFeatureFlag(state, 'darkTheme')
  );
  const deleteNote = useAppSelector(state =>
    featureStore.selectors.selectFeatureFlag(state, 'deleteNote')
  );
  const editNote = useAppSelector(state =>
    featureStore.selectors.selectFeatureFlag(state, 'editNote')
  );

  const featureFlags: Record<keyof FeatureFlags, boolean> = {
    darkTheme,
    deleteNote,
    editNote
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed right-4 bottom-4"
        >
          <SettingsIcon />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-2">
        <DialogHeader>
          <DialogTitle>Feature Flags</DialogTitle>
          <DialogDescription>
            Включайте и отключайте дополнительные функции приложения
          </DialogDescription>
        </DialogHeader>

        {FEATURE_FLAGS.map(flag => (
          <FeatureTogglerCheckbox
            key={flag}
            featureFlag={flag}
            checked={featureFlags[flag]}
            onChange={() =>
              dispatch(featureStore.actions.toggleFeatureFlag(flag))
            }
          />
        ))}
      </DialogContent>
    </Dialog>
  );
}
