import { PlusIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { useCreateNote } from '../model/use-create-note';

export function CreateNoteButton() {
  const { createNote } = useCreateNote();

  return (
    <Button onClick={createNote}>
      <PlusIcon className="h-4 w-4" />
      <span>Create Note</span>
    </Button>
  );
}
