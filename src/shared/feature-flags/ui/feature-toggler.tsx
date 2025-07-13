import { SettingsIcon } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button/button';
import { Checkbox } from '@/shared/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/ui/dialog';
import { Label } from '@/shared/ui/label';

import { featureStore } from '../model/feature-flags.store';
import type { FeatureFlags } from '../model/types';

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
          <SettingsIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-2">
        <DialogHeader>
          <DialogTitle>Feature Flags</DialogTitle>
        </DialogHeader>
        {FEATURE_FLAGS.map(flag => (
          <FeatureToggleCheckbox
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

function FeatureToggleCheckbox({
  featureFlag,
  checked,
  onChange
}: {
  featureFlag: keyof FeatureFlags;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <>
      <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox
          id={featureFlag}
          defaultChecked={checked}
          onCheckedChange={onChange}
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">{featureFlag}</p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable {featureFlag} at any time.
          </p>
        </div>
      </Label>
    </>
  );
}
