'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { useRef } from 'react';
import { useAction } from 'next-safe-action/hooks';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { loginFormSchema } from './validationSchema';
import TextInput from '@/components/common/Form/TextInput';
import PasswordInput from '@/components/common/Form/PasswordInput';
import CheckboxInput from '@/components/common/Form/Checkbox';
import { loginAction } from '@/lib/action/user.action';
import CButton from '@/components/common/Button/CButton';
import useToast from '@/hook/useToast';
import { VALIDATION_MESSAGE } from '@/static/validation';

const LoginForm = () => {
  const { showToast } = useToast();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  const { execute, isExecuting } = useAction(loginAction, {
    onError: (error) => {
      showToast(
        'error',
        error?.error?.serverError || VALIDATION_MESSAGE.SOMETHING_WENT_WRONG
      );
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-[30px]"
      >
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
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CheckboxInput
                      {...form.register('rememberMe')}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="remember-me"
                      label="Remember Me"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link href={'/forgot-password'}>Forgot Password ?</Link>
          </div>
        </div>

        <CButton loading={isExecuting} type="submit" className="w-full">
          Login
        </CButton>
      </form>
    </Form>
  );
};

export default LoginForm;
