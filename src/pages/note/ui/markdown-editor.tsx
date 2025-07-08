import { Textarea } from '@/shared/ui/textarea';

export function MarkdownEditor() {
  return (
    <Textarea
      name="markdown-editor"
      className="h-full w-full resize-none rounded-2xl border-none bg-white p-4 font-mono focus:ring-0 focus:outline-none focus-visible:ring-0"
      placeholder="Начните писать..."
    />
  );
}
