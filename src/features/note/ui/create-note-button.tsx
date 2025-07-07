import { PlusIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';

export function CreateNoteButton() {
  return (
    <Button>
      <PlusIcon className="h-4 w-4" />
      <span>Create Note</span>
    </Button>
  );
}
