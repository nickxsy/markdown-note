export function NoteLayout({
  header,
  editor,
  preview
}: {
  header: React.ReactNode;
  editor: React.ReactNode;
  preview: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-1 flex-col">
        {header}
        <div className="flex flex-1">
          {editor}
          {preview}
        </div>
      </div>
    </div>
  );
}
