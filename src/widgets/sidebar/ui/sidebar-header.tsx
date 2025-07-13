import { navigate } from 'wouter/use-browser-location';

import { featureStore, useFeatureFlag } from '@/shared/feature-flags';
import { useAppDispatch } from '@/shared/lib/redux';
import { ROUTES } from '@/shared/model/routes';
import { Button } from '@/shared/ui/button/button';
import { Typography } from '@/shared/ui/typography';

import { ThemeSwitcher } from '@/entities/theme';

import { CreateNoteButton } from '@/features/note';

export function SidebarHeader() {
  const darkThemeIsEnabled = useFeatureFlag('darkTheme');
  const dispatch = useAppDispatch();

  return (
    <div className="bg-sidebar flex items-center justify-between rounded-2xl p-4">
      <Button
        variant="ghost"
        onClick={() => navigate(ROUTES.HOME)}
        className="px-2"
      >
        <Typography as="h1" size="lg" weight="bold">
          Заметки
        </Typography>
      </Button>
      <div className="flex items-center gap-2">
        {darkThemeIsEnabled && <ThemeSwitcher />}
        <button
          onClick={() =>
            dispatch(featureStore.actions.toggleFeatureFlag('darkTheme'))
          }
        >
          вы
        </button>
        <CreateNoteButton />
      </div>
    </div>
  );
}
