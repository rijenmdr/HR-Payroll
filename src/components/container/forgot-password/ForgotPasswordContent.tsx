'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import { ForgotPasswordStage, HandleStageChangeParams } from '@/type/auth';

const EmailSection = dynamic(() => import('./EmailSection'));
const OTPSection = dynamic(() => import('./OTPSection'));
const ChangePasswordSection = dynamic(() => import('./ChangePasswordSection'));

const ForgotPasswordContent = () => {
  const [stage, setStage] = useState<ForgotPasswordStage>('email');
  const [email, setEmail] = useState('');

  const handleStageChange = ({ newStage, email }: HandleStageChangeParams) => {
    setStage(newStage);

    if (email) setEmail(email);
  };

  return (
    <div className="flex flex-col gap-[30px] w-full">
      {stage === 'email' ? (
        <EmailSection handleStageChange={handleStageChange} />
      ) : null}

      {stage === 'otp' ? (
        <OTPSection email={email} handleStageChange={handleStageChange} />
      ) : null}

      {stage === 'password' ? (
        <ChangePasswordSection
          email={email}
          handleStageChange={handleStageChange}
        />
      ) : null}
    </div>
  );
};

export default ForgotPasswordContent;
