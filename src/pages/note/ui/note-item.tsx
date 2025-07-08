import { Link } from 'wouter';

import type { Note } from '@/entities/note';

export function NoteItem({ note }: { note: Note }) {
  return (
    <li>
      <Link to={`/note/${note.id}`}>
        <div className="flex flex-col gap-1 border-b p-4">
          <span className="text-md">{note.title}</span>
          <span className="text-sm text-gray-500">{note.content}</span>
        </div>
      </Link>
    </li>
  );
}
