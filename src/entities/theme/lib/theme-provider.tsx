import { type PropsWithChildren, useLayoutEffect } from 'react';

import { useAppSelector } from '@/shared/lib/redux';

import { themeStore } from '../model/theme.store';

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = useAppSelector(themeStore.selectors.selectTheme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <>{children}</>;
}
