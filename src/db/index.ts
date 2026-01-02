// Load environment variables for migration/seeding scripts
if (process.env.DB_MIGRATING || process.env.DB_SEEDING) {
  const { config } = require('dotenv');
  config({ path: '.env.local' });
}

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/db/schema';

// For migration/seeding scripts, use process.env directly
const getDatabaseUrl = () => {
  if (process.env.DB_MIGRATING || process.env.DB_SEEDING) {
    return `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  }
  // For app runtime, import env validation
  const { env } = require('@/env');
  return env.DATABASE_URL;
};

export const connection = postgres(getDatabaseUrl(), {
  max: process.env.DB_MIGRATING || process.env.DB_SEEDING ? 1 : undefined,
  onnotice: process.env.DB_SEEDING ? () => {} : undefined,
});

export const db = drizzle(connection, {
  schema,
  logger: true,
});

export type db = typeof db;

export default db;
