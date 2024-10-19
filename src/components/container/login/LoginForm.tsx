'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { loginFormSchema } from './validationSchema';
import TextInput from '@/components/common/Form/TextInput';
import { Button } from '@/components/ui/button';
import PasswordInput from '@/components/common/Form/PasswordInput';
import CheckboxInput from '@/components/common/Form/Checkbox';

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[30px]">
        <div className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormControl>
                  <TextInput
                    id="email"
                    placeholder="Email"
                    value={field.value}
                    onChange={field.onChange}
                    error={error}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    id="password"
                    placeholder="Password"
                    value={field.value}
                    onChange={field.onChange}
                    error={error}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center">
            <CheckboxInput id="remember-me" label="Remember Me" />
            <Link href={'/forgot-password'}>Forgot Password ?</Link>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
