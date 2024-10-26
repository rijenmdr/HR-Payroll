import { defineConfig } from 'drizzle-kit';
import { environment } from '@/env';

export default defineConfig({
  schema: './src/db/schema/index.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: environment.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
