import type { Note } from '../types';

export function groupNotesByDate(notes: Note[]) {
  return notes.reduce((acc: Record<string, Note[]>, note) => {
    const date = note.updatedAt.split('T')[0];

    acc[date] = acc[date] || [];
    acc[date].push(note);

    return acc;
  }, {});
}
