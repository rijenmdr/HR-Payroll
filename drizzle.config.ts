import { ENV } from '@/static/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema/index.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: ENV.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
