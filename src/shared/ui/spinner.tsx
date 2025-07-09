import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/css';

export function Spinner({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'size-6 animate-spin rounded-full border-2 border-black border-t-transparent',
        className
      )}
      {...props}
    />
  );
}
