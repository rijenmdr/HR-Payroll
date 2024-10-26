import { Table, getTableName, sql } from 'drizzle-orm';
import { db, connection } from '@/db';
import * as schema from '@/db/schema';
import * as seeds from './seeds';
import { environment } from '@/env';

async function main() {
  if (!environment.DB_SEEDING) {
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
