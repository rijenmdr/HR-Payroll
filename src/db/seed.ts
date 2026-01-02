import { config } from 'dotenv';

// Load environment variables before anything else
config({ path: '.env.local' });

import { Table, getTableName, sql } from 'drizzle-orm';
import { db, connection } from '@/db';
import * as schema from '@/db/schema';
import * as seeds from './seeds';

async function main() {
  if (!process.env.DB_SEEDING) {
    throw new Error('You must set DB_SEEDING to "true" when running seeds');
  }

  async function resetTable(db: db, table: Table) {
    return db.execute(
      sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`)
    );
  }

  for (const table of [schema.users]) {
    // await db.delete(table); // clear tables without truncating / resetting ids
    await resetTable(db, table);
  }

  await seeds.user(db);

  await connection.end();
}

main();
