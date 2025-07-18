import { useEffect, useState } from 'react';

import { Textarea } from '@/shared/ui/textarea';

import type { Note } from '@/entities/note';

import { NoteTitleInput } from '@/features/note-list';

export function MarkdownEditor({ note }: { note: Note }) {
  const [value, setValue] = useState(note?.content);

  console.log(note);
  useEffect(() => {
    setValue(note?.content);
  }, [note?.content]);

  return (
    <div className="flex flex-col gap-4">
      <NoteTitleInput title={note.title} noteId={note.id} />
      <Textarea
        name="markdown-editor"
        className="bg-sidebar h-full w-full resize-none rounded-2xl border-none p-4 font-mono focus:ring-0 focus:outline-none focus-visible:ring-0"
        placeholder="Начните писать..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}
