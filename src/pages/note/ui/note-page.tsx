import { useParams } from 'wouter';

import { FeatureToggler } from '@/shared/feature-flags';
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
    <>
      <FeatureToggler />
      <NoteLayout
        editor={<MarkdownEditor note={note?.content || ''} />}
        preview={<MarkdownPreview />}
      />
    </>
  );
}
