import { AxiosError } from 'axios';

export function handleRepositoryError(error: unknown, defaultMessage: string) {
  if (error instanceof AxiosError) {
    throw new Error(error.response?.data.message || defaultMessage);
  }
  throw new Error(defaultMessage);
}
