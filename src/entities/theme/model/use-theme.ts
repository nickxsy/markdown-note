import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

import { themeStore } from './theme.store';

export function useTheme() {
  const theme = useAppSelector(themeStore.selectors.selectTheme);

  const dispatch = useAppDispatch();

  const changeTheme = () => {
    dispatch(themeStore.actions.toggleTheme());
  };

  return { currentTheme: theme, changeTheme };
}
