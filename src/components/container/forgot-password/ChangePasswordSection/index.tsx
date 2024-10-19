import { ArrowLeft01Icon } from 'hugeicons-react';
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
import { changePasswordSchema } from './validationSchema';
import PasswordInput from '@/components/common/Form/PasswordInput';

type Props = {
  email: string;
  handleStageChange: (value: HandleStageChangeParams) => void;
};

const ChangePasswordSection = ({ email, handleStageChange }: Props) => {
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: z.infer<typeof changePasswordSchema>) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <CButton
          leftSection={<ArrowLeft01Icon />}
          variant={'ghost'}
          className="hover:text-primary"
          onClick={() => handleStageChange({ newStage: 'email' })}
        >
          Back
        </CButton>
      </div>

      <div className="flex flex-col gap-[30px] w-full">
        <AuthSectionHeader
          title="Enter OTP"
          description={`We have share a code of your registered email address ${email}`}
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[30px]">
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    id="confirmPassword"
                    placeholder="Confirm Password"
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
            Verify
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ChangePasswordSection;
