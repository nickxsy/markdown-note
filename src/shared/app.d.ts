declare const __brand: unique symbol;

declare global {
  type Brand<T, B> = T & { [__brand]: B };

  interface Window {
    __UNHEAD__: ReturnType<typeof createHead>;
  }
}

export {};
