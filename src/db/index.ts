import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/db/schema';
import { environment } from '@/env';

export const connection = postgres(environment.DATABASE_URL!, {
  max: environment.DB_MIGRATING || environment.DB_SEEDING ? 1 : undefined,
  onnotice: environment.DB_SEEDING ? () => {} : undefined,
});

export const db = drizzle(connection, {
  schema,
  logger: true,
});

export type db = typeof db;

export default db;
