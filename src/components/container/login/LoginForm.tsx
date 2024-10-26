'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';

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
import { login } from '@/lib/action/user.action';
import CButton from '@/components/common/Button/CButton';
import useToast from '@/hook/useToast';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, {
    message: '',
    status: 'idle',
  });

  const { showToast } = useToast();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.status === 'success') {
      router.push('/dashboard');
    }

    if (state?.status === 'error') {
      showToast('error', state?.message);
    }
  }, [state]);

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const formData = new FormData();

    formData.append('email', values?.email);
    formData.append('password', values?.password);

    formAction(formData);
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(onSubmit)(evt);
        }}
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
            <CheckboxInput id="remember-me" label="Remember Me" />
            <Link href={'/forgot-password'}>Forgot Password ?</Link>
          </div>
        </div>

        <CButton type="submit" className="w-full">
          Login
        </CButton>
      </form>
    </Form>
  );
};

export default LoginForm;
