import { navigate } from 'wouter/use-browser-location';

import { ROUTES } from '@/shared/model/routes';
import { Typography } from '@/shared/ui/typography';

import { CreateNoteButton } from '@/features/note';

export function SidebarHeader() {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4">
      <button className="cursor-pointer" onClick={() => navigate(ROUTES.HOME)}>
        <Typography as="h1" size="lg" weight="bold" className="text-gray-800">
          Заметки
        </Typography>
      </button>
      <CreateNoteButton />
    </div>
  );
}
