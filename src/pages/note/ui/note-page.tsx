import { useParams } from 'wouter';

import { useAppSelector } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

import { MarkdownEditor, MarkdownPreview } from '@/features/markdown';

import { NoteLayout } from '../compose/note-layout';

export function NotePage() {
  const { id } = useParams();

  const note = useAppSelector(state =>
    noteStore.selectors.selectNoteById(state, id)
  );

  console.log(note);

  return (
    <NoteLayout
      editor={<MarkdownEditor note={note?.content || ''} />}
      preview={<MarkdownPreview />}
    />
  );
}
