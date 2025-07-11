import { useNoteList } from '../../model/use-note-list';

import { UiNoteList } from './ui-note-list';

export function NoteList() {
  const { groupedNotes, isDelayedShow, error } = useNoteList();

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <UiNoteList isDelayedShow={isDelayedShow} groupedNotes={groupedNotes} />
  );
}
