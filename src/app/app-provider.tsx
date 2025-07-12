import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { ComposeChildren } from '@/shared/lib/react';
import { store } from '@/shared/lib/redux';

import { ThemeProvider } from '@/entities/theme';

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ComposeChildren>
      <Provider store={store} children={null} />
      <ThemeProvider children={null} />
      {children}
    </ComposeChildren>
  );
}
