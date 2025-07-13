import { useNoteList } from '../../model/use-note-list';

import { UiNoteList } from './ui-note-list';

export function NoteList() {
  const noteList = useNoteList();

  if (noteList.error) {
    return <div className="text-red-500">{noteList.error}</div>;
  }

  return (
    <UiNoteList
      isDelayedShow={noteList.isDelayedShow}
      groupedNotes={noteList.groupedNotes}
    />
  );
}
