import { TrashIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import { Button } from '@/shared/ui/button';

import { useRemoveNote } from '../model/use-remove-note';

export function RemoveNoteButton({
  id,
  ...props
}: {
  id: string;
} & ComponentProps<typeof Button>) {
  const { removeNote } = useRemoveNote();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => removeNote(id)}
      {...props}
    >
      <TrashIcon />
    </Button>
  );
}
