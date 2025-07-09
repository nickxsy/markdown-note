import { useRoute } from 'wouter';
import { navigate } from 'wouter/use-browser-location';

import { cn } from '@/shared/lib/css';

import type { Note } from '@/entities/note';

import { RemoveNoteButton } from '@/features/note';

export function NoteItem({ note }: { note: Note }) {
  const [isActive] = useRoute(`/note/${note.id}`);

  const createdAt = new Date(note.createdAt).toLocaleString();
  const updatedAt = new Date(note.updatedAt).toLocaleString();

  const isUpdated = createdAt !== updatedAt;

  return (
    <li className="relative">
      <button
        onClick={() => {
          navigate(`/note/${note.id}`);
        }}
        className={cn(
          'group flex w-full cursor-pointer flex-col px-4 py-[2px] text-left',
          {
            'pointer-events-none': isActive
          }
        )}
      >
        <div
          className={cn(
            'rounded-2xl border-2 border-transparent bg-gray-100 p-5 transition-colors group-hover:bg-gray-200',
            {
              'pointer-events-none border-blue-500': isActive
            }
          )}
        >
          <div className="flex flex-col gap-1">
            <span className="text-md">{note.title}</span>
            {note.content && (
              <span className="text-sm text-gray-500">{note.content}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 text-xs text-gray-500">
            <span>{createdAt}</span>
            {isUpdated && <span>Последнее изменение: {updatedAt}</span>}
          </div>
        </div>
      </button>

      <RemoveNoteButton
        id={note.id}
        variant="outline"
        size="icon"
        className="absolute top-2 right-6 rounded-full"
      />
    </li>
  );
}
