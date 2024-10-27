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
import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp';
import { otpSchema } from './validationSchema';

type Props = {
  email: string;
  handleStageChange: (value: HandleStageChangeParams) => void;
};

const OTPSection = ({ email, handleStageChange }: Props) => {
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const onSubmit = (values: z.infer<typeof otpSchema>) => {
    handleStageChange({
      newStage: 'password',
    });

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
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={5} {...field}>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                  </InputOTP>
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

export default OTPSection;
