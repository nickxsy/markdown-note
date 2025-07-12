import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/button/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

const authFormSchema = z.object({
  username: z.string().min(1, { message: 'Логин не может быть пустым' }),
  password: z.string().min(1, { message: 'Пароль не может быть пустым' })
});

export function AuthForm({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof authFormSchema>>({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: zodResolver(authFormSchema)
  });

  const handleSubmit = form.handleSubmit(data => {
    console.log(data);
  });

  return (
    <form
      className={cn('flex flex-col gap-4', className)}
      onSubmit={handleSubmit}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Логин</FormLabel>
              <FormControl>
                <Input placeholder="Логин" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder="Пароль" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Войти</Button>
      </Form>
    </form>
  );
}
