import 'server-only';

import { SessionOptions, SessionPayload } from '@/type/auth';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { env } from '@/env';
import { redirect } from 'next/navigation';

const secretKey = env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload, rememberMe?: boolean) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(rememberMe ? '30d' : '1hr')
    .sign(key);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log('Failed to verify session', error);
    return null;
  }
}

export async function createSession(sessionOptions: SessionOptions) {
  const expiresAt = new Date(
    Date.now() +
      (sessionOptions.rememberMe
        ? 30 * 24 * 60 * 60 * 1000
        : 1 * 60 * 60 * 1000)
  );

  const session = await encrypt(
    { userId: sessionOptions?.userId, expiresAt },
    sessionOptions.rememberMe
  );

  (await cookies()).set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function verifySession() {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session) {
    redirect('/login');
  }

  return { isAuth: true, userId: session?.userId };
}
