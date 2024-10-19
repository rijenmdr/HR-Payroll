import { z } from 'zod';

import { PASSWORD_REGEX } from '@/static/auth';

export const changePasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Password is required')
      .refine((value) => value === '' || PASSWORD_REGEX.test(value), {
        message:
          'Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
      }),
    confirmPassword: z.string().min(1, 'Confirm Password is required.'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: `Password don't match.`,
      });
    }
  });
