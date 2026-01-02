import { config } from 'dotenv';

// Load environment variables before anything else
config({ path: '.env.local' });

export const users = [
  {
    name: 'HR Admin',
    phone: '+9779813828181',
    phoneVerified: true,
    email: process.env.ADMIN_EMAIL!,
    emailVerified: true,
    password: process.env.ADMIN_PASSWORD!,
    role: 'admin',
  },
];
