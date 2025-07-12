import type { ReactNode } from 'react';

import { Typography } from '@/shared/ui/typography';

export function HomeLayout({ empty }: { empty: ReactNode }) {
  return (
    <div className="flex h-screen items-center justify-center">{empty}</div>
  );
}

export function HomeLayoutEmpty() {
  return (
    <Typography as="p" size="lg">
      Выберите заметку или создайте новую
    </Typography>
  );
}
