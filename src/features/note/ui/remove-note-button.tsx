import { TrashIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';

export function RemoveNoteButton() {
  return (
    <Button variant="ghost" size="icon">
      <TrashIcon />
    </Button>
  );
}
