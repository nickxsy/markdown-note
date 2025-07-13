import { PlusIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/css';
import { useAppearanceDelay } from '@/shared/lib/react';
import { Button } from '@/shared/ui/button/button';

import { useCreateNote } from '../model/use-create-note';

export function CreateNoteButton({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const note = useCreateNote();
  const isDelayedShow = useAppearanceDelay(note.isLoading);

  return (
    <Button
      onClick={note.createNote}
      disabled={isDelayedShow}
      variant="secondary"
      size="icon"
      className={cn('rounded-full', className)}
      {...props}
    >
      <PlusIcon />
    </Button>
  );
}
