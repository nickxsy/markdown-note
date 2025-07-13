declare global {
  type Brand<T, B> = T & { __brand: B };
}

export {};
