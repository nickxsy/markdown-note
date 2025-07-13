import { TrashIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/button/button';

import { useRemoveNote } from '../model/use-remove-note';

export function RemoveNoteButton({
  id,
  className,
  ...props
}: {
  id: string;
} & ComponentProps<typeof Button>) {
  const remove = useRemoveNote();

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={remove.removeNote(id)}
      className={cn('rounded-full', className)}
      {...props}
    >
      <TrashIcon />
    </Button>
  );
}
