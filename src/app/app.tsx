import { createHead } from 'unhead/client';

import { AppLoader } from './app-loader';
import { AppProvider } from './providers/app-provider';
import { AppRouter } from './router';

window.__UNHEAD__ = createHead();

export function App() {
  return (
    <AppProvider>
      <AppLoader>
        <AppRouter />
      </AppLoader>
    </AppProvider>
  );
}
