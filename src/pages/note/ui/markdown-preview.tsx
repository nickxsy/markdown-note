export function MarkdownPreview() {
  return (
    <div className="h-full flex-1 overflow-y-auto rounded-2xl border-gray-200 bg-white p-4">
      <div className="prose max-w-none"></div>
    </div>
  );
}
