import { Route, Switch } from 'wouter';

import { HomePage } from '@/pages/home';
import { NotePage } from '@/pages/note';

export function RouterProvider() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path={`/note/:id`} component={NotePage} />
      </Switch>
    </>
  );
}
