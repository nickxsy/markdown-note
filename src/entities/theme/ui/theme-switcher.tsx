import { MoonIcon, SunIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/button/button';

import { useTheme } from '../model/use-theme';

export function ThemeSwitcher({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const theme = useTheme();

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={theme.changeTheme}
      className={cn('rounded-full', className)}
      {...props}
    >
      {theme.currentTheme === 'light' && <SunIcon />}
      {theme.currentTheme === 'dark' && <MoonIcon />}
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
}
