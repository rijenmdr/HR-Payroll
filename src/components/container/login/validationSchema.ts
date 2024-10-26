import { z } from 'zod';
import { VALIDATION_MESSAGE } from '@/static/validation';

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: VALIDATION_MESSAGE.EMAIL_REQUIRED })
    .email({ message: VALIDATION_MESSAGE.EMAIL_INVALID }),
  password: z
    .string()
    .min(1, { message: VALIDATION_MESSAGE.PASSWORD_REQUIRED }),
});
