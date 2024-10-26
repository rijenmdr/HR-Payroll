import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
  DB_MIGRATING: z.coerce.boolean().default(false),
  DB_SEEDING: z.coerce.boolean().default(false),
  SECRET_KEY: z.string(),
  ADMIN_EMAIL: z.string(),
  ADMIN_PASSWORD: z.string(),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

// Create a type for our environment
type Env = z.infer<typeof envSchema>;

// Function to validate and parse the environment
function validateEnv(): Env {
  const env = envSchema.safeParse(process.env);

  if (!env.success) {
    console.error('❌ Invalid environment variables:');
    throw new Error(
      Object.entries(env.error.flatten().fieldErrors)
        .map(([field, errors]) => `${field}: ${errors?.join(', ')}`)
        .join('\n')
    );
  }

  return env.data;
}

// Export the validated and typed environment variables
export const environment = validateEnv();
