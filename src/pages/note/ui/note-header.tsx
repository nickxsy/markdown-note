import { TrashIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export function NoteHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
      <div className="flex-1">
        <Input
          type="text"
          className="w-full bg-transparent text-xl font-semibold focus:outline-none"
        />
      </div>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full text-red-500"
      >
        <TrashIcon />
      </Button>
    </div>
  );
}
