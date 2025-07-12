import { MoonIcon, SunIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/button/button';

import { useTheme } from '../theme-provider';

export function ThemeSwitcher({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={cn('rounded-full', className)}
      {...props}
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
}
