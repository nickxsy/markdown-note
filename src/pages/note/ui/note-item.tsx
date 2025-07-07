import { Link } from 'wouter';

import type { Note } from '@/entities/note';

export function NoteItem({ note }: { note: Note }) {
  return (
    <Link
      to={`/note/${note.id}`}
      className="flex flex-col gap-1 border-b border-gray-200 p-4"
    >
      <span className="text-md">{note.title}</span>
      <span className="text-sm text-gray-500">{note.content}</span>
    </Link>
  );
}
