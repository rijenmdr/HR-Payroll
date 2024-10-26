import db from '@/db';
import { verifySession } from '../auth';
import { eq } from 'drizzle-orm';
import { users } from '@/db/schema';
import { cache } from 'react';

export const getUser = cache(async () => {
  const session = await verifySession();

  if (!session) return null;

  try {
    const user = await db.query.users.findFirst({
      where: eq(users?.id, Number(session?.userId)),
      columns: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
});
