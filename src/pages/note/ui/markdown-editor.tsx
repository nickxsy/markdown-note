import { useParams } from 'wouter';

export function MarkdownEditor() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <textarea
        className="h-full w-full resize-none bg-transparent font-mono focus:outline-none"
        placeholder="Начните писать..."
      />
    </div>
  );
}
