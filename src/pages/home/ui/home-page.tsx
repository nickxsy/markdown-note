import { Typography } from '@/shared/ui/typography';

export function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Typography as="p" size="lg">
        Выберите заметку или создайте новую
      </Typography>
    </div>
  );
}
