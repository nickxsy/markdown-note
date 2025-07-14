import { type PropsWithChildren, useLayoutEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

import { useFeatureFlag } from '@/entities/feature-flags';

import { themeStore } from '../model/theme.store';

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = useAppSelector(themeStore.selectors.selectTheme);
  const isDarkThemeEnabled = useFeatureFlag('darkTheme');
  const dispatch = useAppDispatch();
  const prevDarkThemeEnabled = useRef(isDarkThemeEnabled);

  useLayoutEffect(() => {
    if (
      prevDarkThemeEnabled.current &&
      !isDarkThemeEnabled &&
      theme === 'dark'
    ) {
      dispatch(themeStore.actions.setTheme('light'));
    }

    prevDarkThemeEnabled.current = isDarkThemeEnabled;
  }, [isDarkThemeEnabled, theme, dispatch]);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <>{children}</>;
}
