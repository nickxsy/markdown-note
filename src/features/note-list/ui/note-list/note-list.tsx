import { useNoteList } from '../../model/use-note-list';

import { UiNoteList } from './ui-note-list';

export function NoteList() {
  const { groupedNotes, isDelayedShow } = useNoteList();

  return (
    <UiNoteList isDelayedShow={isDelayedShow} groupedNotes={groupedNotes} />
  );
}
