import 'dotenv/config';

import config from '../../drizzle.config';

import { migrate } from 'drizzle-orm/postgres-js/migrator';
import db, { connection } from './index';
import { environment } from '@/env';

async function main() {
  if (!environment.DB_MIGRATING) {
    throw new Error(
      'You must set DB_MIGRATING to "true" when running migrations'
    );
  }

  await migrate(db, { migrationsFolder: config.out! });

  await connection.end();
}

main();
