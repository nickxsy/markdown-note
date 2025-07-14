import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';
import { Typography } from '@/shared/ui/typography';

import type { FeatureFlags } from '../model/types';

export function FeatureTogglerCheckbox({
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
          <Typography className="text-sm leading-none font-medium">
            {featureFlag}
          </Typography>
          <Typography className="text-muted-foreground text-sm">
            You can enable or disable {featureFlag} at any time.
          </Typography>
        </div>
      </Label>
    </>
  );
}
