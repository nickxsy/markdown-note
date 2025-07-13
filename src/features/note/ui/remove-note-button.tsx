import { TrashIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/button/button';

import type { DeleteNoteData } from '@/entities/note';

import { useRemoveNote } from '../model/use-remove-note';

export function RemoveNoteButton({
  note,
  className,
  ...props
}: {
  note: DeleteNoteData;
} & ComponentProps<typeof Button>) {
  const remove = useRemoveNote();

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={remove.removeNote(note)}
      className={cn('rounded-full', className)}
      {...props}
    >
      <TrashIcon />
    </Button>
  );
}
