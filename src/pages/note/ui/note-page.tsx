import { Head } from '@unhead/react';
import { useParams } from 'wouter';

import { useAppSelector } from '@/shared/lib/redux';

import { FeatureToggler } from '@/entities/feature-flags';
import { noteStore } from '@/entities/note';

import { MarkdownEditor, MarkdownPreview } from '@/features/markdown';

import { NoteLayout } from './note-layout';

export function NotePage() {
  const params = useParams();

  const note = useAppSelector(state =>
    noteStore.selectors.selectNoteById(state, params.id)
  );

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <>
      <Head>
        <title>{note?.title || 'Заметка'}</title>
        {note?.content && (
          <meta name="description" content={note?.content.slice(0, 100)} />
        )}
      </Head>
      <FeatureToggler />
      <NoteLayout
        editor={<MarkdownEditor note={note} />}
        preview={<MarkdownPreview />}
      />
    </>
  );
}
