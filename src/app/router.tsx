import { Redirect, Route, Switch } from 'wouter';

import { AuthPage } from '@/pages/auth';
import { HomePage } from '@/pages/home';
import { NotePage } from '@/pages/note';

import { RootLayout } from '@/widgets/root-layout';
import { Sidebar } from '@/widgets/sidebar';

import { ROUTES } from '@/shared/model/routes';

import { NoteList } from '@/features/note-list';

export function AppRouter() {
  return (
    <Switch>
      <Route path={ROUTES.AUTH} component={AuthPage} />

      <Route path="*">
        <RootLayout sidebar={<Sidebar notes={<NoteList />} />}>
          <Switch>
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.NOTE} component={NotePage} />

            {/* Redirect to home page if no route is found */}
            <Redirect to={ROUTES.HOME} replace />
          </Switch>
        </RootLayout>
      </Route>
    </Switch>
  );
}
