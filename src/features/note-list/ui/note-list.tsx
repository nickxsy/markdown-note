import { cn } from '@/shared/lib/css';
import { dateFormatter } from '@/shared/lib/date-formatter';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Spinner } from '@/shared/ui/spinner';

import { useNoteList } from '../model/use-note-list';

import { NoteItem } from './note-item';

export function NoteList() {
  const { groupedNotes, isDelayedShow } = useNoteList();

  return (
    <div className="relative flex h-full items-center justify-center">
      {isDelayedShow && (
        <Spinner className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
      )}

      <ScrollArea className="h-full w-full rounded-2xl bg-white">
        <ul
          className={cn('flex h-full w-full flex-col py-3', {
            'pointer-events-none opacity-20': isDelayedShow
          })}
        >
          {Object.entries(groupedNotes).map(([date, notes]) => (
            <li key={date} className="flex flex-col gap-1 py-2">
              <div className="px-4">
                <h2 className="text-xs font-bold text-gray-500">
                  {dateFormatter(date)}
                </h2>
              </div>
              <ul>
                {notes.map(note => (
                  <NoteItem key={note.id} note={note} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
