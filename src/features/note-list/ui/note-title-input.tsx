import { Input } from '@/shared/ui/input';
import { Spinner } from '@/shared/ui/spinner';
import { Typography } from '@/shared/ui/typography';

import { useFeatureFlag } from '@/entities/feature-flags';
import type { NoteId } from '@/entities/note';

import { useNoteTitleInput } from '../model/use-note-title-input';

export function NoteTitleInput({
  title,
  noteId
}: {
  title: string;
  noteId: NoteId;
}) {
  const inputTitle = useNoteTitleInput({ title, noteId });
  const editNoteIsEnabled = useFeatureFlag('editNote');

  if (inputTitle.active && editNoteIsEnabled) {
    return (
      <div className="relative">
        <Input
          onBlur={inputTitle.handleBlur}
          onKeyDown={inputTitle.handleKeyDown}
          ref={inputTitle.ref}
          onChange={inputTitle.changeValue}
          placeholder="Введите название"
          value={inputTitle.value}
          disabled={inputTitle.isLoading}
        />
        {inputTitle.isEditing && (
          <Spinner className="absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2" />
        )}
      </div>
    );
  }

  return (
    <Typography
      onClick={inputTitle.handleActive}
      as="span"
      size="lg"
      weight="medium"
      className="line-clamp-1 cursor-pointer transition-colors hover:text-blue-600"
    >
      {inputTitle.value}
    </Typography>
  );
}
