import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/css';

const typographyVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xs: 'text-xs'
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold'
    }
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal'
  }
});

export function Typography({
  children,
  asChild,
  size,
  weight,
  className,
  as = 'p',
  ...props
}: VariantProps<typeof typographyVariants> &
  React.ComponentProps<'div'> & {
    children: React.ReactNode;
    asChild?: boolean;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  }) {
  const Comp = asChild ? Slot : as;
  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({ size, weight, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
}
