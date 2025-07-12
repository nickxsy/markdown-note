import { MoonIcon, SunIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/css';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button/button';

import { themeStore } from '../model/theme.store';

export function ThemeSwitcher({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeStore.selectors.selectTheme);

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => dispatch(themeStore.actions.toggleTheme())}
      className={cn('rounded-full', className)}
      {...props}
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
}
