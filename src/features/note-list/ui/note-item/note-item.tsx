import { useRoute } from 'wouter';
import { navigate } from 'wouter/use-browser-location';

import { cn } from '@/shared/lib/css';
import { Typography } from '@/shared/ui/typography';

import type { Note } from '@/entities/note';

import { RemoveNoteButton } from '@/features/note';

import { NoteItemTitleInput } from './note-item-title-input';

export function NoteItem({ note }: { note: Note }) {
  const [isActive] = useRoute(`/note/${note.id}`);

  const createdAt = new Date(note.createdAt).toLocaleString();
  const updatedAt = new Date(note.updatedAt).toLocaleString();

  const isUpdated = createdAt !== updatedAt;

  return (
    <div className="relative">
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
            'bg-card group-hover:bg-card-hover flex flex-col gap-[6px] rounded-2xl border-2 border-transparent p-[14px] transition-colors group-focus:border-blue-300',
            {
              'pointer-events-none border-blue-500 group-focus:border-blue-500':
                isActive
            }
          )}
        >
          <div className="flex flex-col">
            <NoteItemTitleInput title={note.title} />

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

      <RemoveNoteButton id={note.id} className="absolute top-2 right-6" />
    </div>
  );
}
