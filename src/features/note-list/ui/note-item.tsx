import { useRoute } from 'wouter';
import { navigate } from 'wouter/use-browser-location';

import { cn } from '@/shared/lib/css';
import { Typography } from '@/shared/ui/typography';

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
          'group flex w-full cursor-pointer flex-col px-4 py-[2px] text-left outline-none',
          {
            'pointer-events-none': isActive
          }
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-[6px] rounded-2xl border-2 border-transparent bg-gray-100 p-[14px] transition-colors group-hover:bg-gray-200 group-focus:border-blue-300',
            {
              'pointer-events-none border-blue-500 group-focus:border-blue-500':
                isActive
            }
          )}
        >
          <div className="flex flex-col">
            <Typography
              as="span"
              size="lg"
              weight="medium"
              className="line-clamp-1"
            >
              {note.title}
            </Typography>
            {note.content && (
              <Typography as="p" size="sm" className="line-clamp-1 w-[90%]">
                {note.content}
              </Typography>
            )}
          </div>
          <div className="flex flex-col gap-2 text-xs text-gray-500">
            <Typography as="span" size="xs" weight="normal">
              {createdAt}
            </Typography>
            {isUpdated && (
              <Typography as="span" size="xs" weight="normal">
                Последнее изменение: {updatedAt}
              </Typography>
            )}
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
