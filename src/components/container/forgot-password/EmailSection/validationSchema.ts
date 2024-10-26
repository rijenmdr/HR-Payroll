import { z } from 'zod';
import { VALIDATION_MESSAGE } from '@/static/validation';

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: VALIDATION_MESSAGE.EMAIL_REQUIRED })
    .email({ message: VALIDATION_MESSAGE.EMAIL_INVALID }),
});
