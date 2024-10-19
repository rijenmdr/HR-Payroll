import { z } from 'zod';
import { VALIDATION_MESSAGE } from '@/static/validation';

export const otpSchema = z.object({
  otp: z.string().min(5, { message: VALIDATION_MESSAGE.OTP_REQUIRED }),
});
