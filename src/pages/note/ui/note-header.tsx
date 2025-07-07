import { Input } from '@/shared/ui/input';

import { RemoveNoteButton } from '@/features/note';

export function NoteHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
      <div className="flex-1">
        <Input
          type="text"
          className="w-full bg-transparent text-xl font-semibold focus:outline-none"
        />
      </div>
      <RemoveNoteButton />
    </div>
  );
}
