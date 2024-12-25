import { ENV } from '@/static/env';

export const users = [
  {
    name: 'HR Admin',
    phone: '+9779813828181',
    phoneVerified: true,
    email: ENV.ADMIN_EMAIL,
    emailVerified: true,
    password: ENV.ADMIN_PASSWORD,
    role: 'admin',
  },
];
