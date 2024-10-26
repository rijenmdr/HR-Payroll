import { ArrowLeft01Icon } from 'hugeicons-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import AuthSectionHeader from '@/components/common/AuthSectionHeader';
import CButton from '@/components/common/Button/CButton';
import { HandleStageChangeParams } from '@/type/auth';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import TextInput from '@/components/common/Form/TextInput';
import { emailSchema } from './validationSchema';

type Props = {
  handleStageChange: (value: HandleStageChangeParams) => void;
};

const EmailSection = ({ handleStageChange }: Props) => {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof emailSchema>) => {
    handleStageChange({
      newStage: 'otp',
      email: values.email,
    });
  };

  return (
    <>
      <Link
        href={'/login'}
        passHref
        className="text-foreground hover:text-primary w-fit"
      >
        <CButton leftSection={<ArrowLeft01Icon />} variant={'ghost'}>
          Back
        </CButton>
      </Link>

      <div className="flex flex-col gap-[30px] w-full">
        <AuthSectionHeader
          title="Forgot Password"
          description="Enter your registered email address. we'll send you a code to reset your password."
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[30px]">
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
          <Button type="submit" className="w-full">
            Send OTP
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EmailSection;
