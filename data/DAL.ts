import 'server-only';
import connectToDatabase from '@/lib/connectToDatabase';
import Session, { SessionInterface } from '@/models/session';
import { cookies } from 'next/headers';

export const getSession = async () => {
  const session_id = cookies().get('session_id')?.value;

  if (!session_id) return null;

  try {
    // console.log('connecting to database...');
    // await connectToDatabase();
    // console.log('connected to database!');

    const session = await Session.findOne<SessionInterface>({ session_id });

    if (!session) return null;

    return session;
  } catch (error: any) {
    console.log('[SESSION_VERIFICATION_ERROR]', error);
    throw Error('Session Verification Error');
  }
};
