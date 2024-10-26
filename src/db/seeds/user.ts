import * as argon2 from 'argon2';
import type db from '@/db';
import * as schema from '@/db/schema';
import { users } from './data/user';

export default async function seed(db: db) {
  await Promise.all(
    users.map(async (user) => {
      await db
        .insert(schema.users)
        .values({
          ...user,
          password: await argon2.hash(user.password),
        })
        .returning();
    })
  );
}
