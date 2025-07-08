import { PlusIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { useCreateNote } from '../model/use-create-note';

export function CreateNoteButton() {
  const { createNote, isLoading } = useCreateNote();

  return (
    <Button
      onClick={createNote}
      disabled={isLoading}
      variant="secondary"
      size="icon"
      className="rounded-full"
    >
      <PlusIcon className="h-5 w-5" />
    </Button>
  );
}
