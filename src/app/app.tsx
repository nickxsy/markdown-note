import { AppLoader } from './app-loader';
import { AppProvider } from './providers/app-provider';
import { AppRouter } from './router';

export function App() {
  return (
    <AppProvider>
      <AppLoader>
        <AppRouter />
      </AppLoader>
    </AppProvider>
  );
}
