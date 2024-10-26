'use server';

import { eq } from 'drizzle-orm';
import argon2 from 'argon2';

import { loginFormSchema } from '@/components/container/login/validationSchema';
import db from '@/db';
import { users } from '@/db/schema';
import { createSession } from '../auth';
import { Status } from '@/type/generic';

export type FormState = {
  message: string;
  status: Status;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function login(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  prevState.status = 'loading';
  const formData = Object.fromEntries(data);
  const parsed = loginFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: 'Invalid form data',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
      status: 'error',
    };
  }

  const user = await db.query.users.findFirst({
    where: eq(users.email, parsed.data.email),
  });

  if (!user) {
    return { message: 'Invalid Credentials', status: 'error' };
  }

  const passwordMatch = await argon2.verify(
    user.password,
    parsed.data.password
  );

  if (!passwordMatch) {
    return { message: 'Invalid Credentials', status: 'error' };
  }

  const userId = user.id;

  await createSession(userId);

  return { message: 'Login Successful', status: 'success' };
}
