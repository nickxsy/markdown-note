import { useEffect, useState } from 'react';

import { useAppDispatch } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

export function AppLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([dispatch(noteStore.actions.loadNotes())]).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
