import { useParams } from 'wouter';

import { useAppSelector } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

import { NoteLayout } from '../compose/note-layout';

import { MarkdownEditor } from './markdown-editor';
import { MarkdownPreview } from './markdown-preview';
import { NoteHeader } from './note-header';

export function NotePage() {
  const { id } = useParams();

  const note = useAppSelector(state =>
    noteStore.selectors.selectNoteById(state, id)
  );

  return (
    <NoteLayout
      header={<NoteHeader />}
      editor={<MarkdownEditor note={note?.content || ''} />}
      preview={<MarkdownPreview />}
    />
  );
}
