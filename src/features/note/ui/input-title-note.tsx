import { useState } from 'react';

import { Input } from '@/shared/ui/input';

export function InputTitleNote() {
  const [value, setValue] = useState('');

  return (
    <Input
      className="w-full"
      placeholder="Название заметки"
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  );
}
