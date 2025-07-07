import { NoteLayout } from '../compose/note-layout';

import { MarkdownEditor } from './markdown-editor';
import { MarkdownPreview } from './markdown-preview';
import { NoteHeader } from './note-header';

export function NotePage() {
  return (
    <NoteLayout
      header={<NoteHeader />}
      editor={<MarkdownEditor />}
      preview={<MarkdownPreview />}
    />
  );
}
