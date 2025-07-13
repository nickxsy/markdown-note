import { Typography } from '@/shared/ui/typography';

import { useTheme } from '../model/use-theme';

export function CurrentThemeValue() {
  const theme = useTheme();

  return (
    <Typography
      className="pointer-events-none absolute top-2 right-2 z-100"
      as="span"
      size="xs"
    >
      Текущая тема: {theme.currentTheme}
    </Typography>
  );
}
