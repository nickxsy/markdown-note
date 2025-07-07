/** @type {import('./lib/types').Configuration} */
export default {
  '*.{ts,tsx,js,jsx}': ['prettier --check', 'eslint', 'vitest related --run'],
  '*.css': ['prettier --check'],
  '*.{json,md,mdx}': ['prettier --check']
};
