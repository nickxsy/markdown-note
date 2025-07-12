import { Typography } from '@/shared/ui/typography';

import { AuthForm } from './auth-form';

export function AuthPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Typography as="h1" size="lg">
        Авторизация
      </Typography>
      <AuthForm />
    </div>
  );
}
