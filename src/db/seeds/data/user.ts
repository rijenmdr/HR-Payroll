import { environment } from '@/env';

export const users = [
  {
    name: 'HR Admin',
    phone: '+9779813828181',
    phoneVerified: true,
    email: environment.ADMIN_EMAIL,
    emailVerified: true,
    password: environment.ADMIN_PASSWORD,
    role: 'admin',
  },
];
