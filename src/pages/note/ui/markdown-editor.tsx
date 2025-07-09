import { useEffect, useState } from 'react';

import { Textarea } from '@/shared/ui/textarea';

export function MarkdownEditor({ note }: { note: string }) {
  const [value, setValue] = useState(note);

  useEffect(() => {
    setValue(note);
  }, [note]);

  return (
    <Textarea
      name="markdown-editor"
      className="h-full w-full resize-none rounded-2xl border-none bg-white p-4 font-mono focus:ring-0 focus:outline-none focus-visible:ring-0"
      placeholder="Начните писать..."
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}
