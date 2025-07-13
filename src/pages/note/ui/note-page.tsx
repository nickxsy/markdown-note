import { useParams } from 'wouter';

import { useAppSelector } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

import { MarkdownEditor, MarkdownPreview } from '@/features/markdown';

import { NoteLayout } from './note-layout';

export function NotePage() {
  const params = useParams();

  const note = useAppSelector(state =>
    noteStore.selectors.selectNoteById(state, params.id)
  );

  return (
    <NoteLayout
      editor={<MarkdownEditor note={note?.content || ''} />}
      preview={<MarkdownPreview />}
    />
  );
}
