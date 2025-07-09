import { Spinner } from '@/shared/ui/spinner';

export function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner />
    </div>
  );
}
