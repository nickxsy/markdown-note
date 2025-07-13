import { useEffect, useState } from 'react';

import { PageLoader } from '@/widgets/page-loader';

import { initializeFeatureFlags } from '@/shared/feature-flags';
import { useAppDispatch } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

export function AppLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      dispatch(noteStore.actions.loadNotes()),
      dispatch(initializeFeatureFlags())
    ]).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <PageLoader />;
  }

  return <>{children}</>;
}
