import { PlusIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';

export function NoteSidebar({ notes }: { notes: React.ReactNode }) {
  return (
    <div className="flex w-72 flex-col border-r border-gray-200 bg-gray-50">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Заметки</h1>
          <Button variant="ghost" size="icon">
            <PlusIcon />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">{notes}</div>
    </div>
  );
}
