import { useCallback, useEffect, useRef, useState } from 'react';

import { Input } from '@/shared/ui/input';
import { Typography } from '@/shared/ui/typography';

export function NoteItemTitleInput({ title }: { title: string }) {
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>(title);
  const ref = useRef<HTMLInputElement>(null);
  // const noteTitle = useAppSelector(noteStore.actions.updateNoteTitle);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    if (active && ref.current) {
      ref.current.focus();
    }
  }, [active]);

  const handleActive = useCallback(() => {
    setActive(prev => !prev);
  }, []);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  if (active) {
    return (
      <Input
        onBlur={() => setActive(false)}
        ref={ref}
        onChange={changeValue}
        placeholder={value ?? 'Введите название'}
        value={value}
      />
    );
  }

  return (
    <Typography
      onClick={handleActive}
      as="span"
      size="lg"
      weight="medium"
      className="line-clamp-1"
    >
      {title}
    </Typography>
  );
}
