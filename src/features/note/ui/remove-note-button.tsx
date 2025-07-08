import { TrashIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { useRemoveNote } from '../model/use-remove-note';

export function RemoveNoteButton({ id }: { id: string }) {
  const { removeNote } = useRemoveNote();

  return (
    <Button variant="ghost" size="icon" onClick={() => removeNote(id)}>
      <TrashIcon />
    </Button>
  );
}
