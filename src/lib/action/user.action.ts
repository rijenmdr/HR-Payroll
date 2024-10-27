'use server';

import { eq } from 'drizzle-orm';
import argon2 from 'argon2';

import { loginFormSchema } from '@/components/container/login/validationSchema';
import db from '@/db';
import { users } from '@/db/schema';
import { createSession } from '../auth';
import { redirect } from 'next/navigation';
import { actionClient } from '../safe-action';
import { flattenValidationErrors } from 'next-safe-action';
import { LoginError } from '../errors';
import { SessionOptions } from '@/type/auth';

export const loginAction = actionClient
  .schema(loginFormSchema, {
    handleValidationErrorsShape: (ve) => flattenValidationErrors(ve),
  })
  .action(async ({ parsedInput }) => {
    const user = await db.query.users.findFirst({
      where: eq(users.email, parsedInput.email),
    });

    if (!user) {
      throw new LoginError();
    }

    const passwordMatch = await argon2.verify(
      user.password,
      parsedInput.password
    );

    if (!passwordMatch) {
      throw new LoginError();
    }

    const sessionOptions: SessionOptions = {
      userId: user.id,
      rememberMe: parsedInput.rememberMe,
    };

    await createSession(sessionOptions);

    redirect('/dashboard');
  });
