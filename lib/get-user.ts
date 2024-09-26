import { getSession } from '@/data/DAL';
import User, { UserInterface } from '@/models/user';
import { cache } from 'react';
import connectToDatabase from './connectToDatabase';

const getUser = cache(async () => {
  try {
    await connectToDatabase();
    const session = await getSession();

    if (!session) return null;

    const user = await User.findById<UserInterface>(session.user_id);

    if (!user) return null;

    return user;
  } catch (error: any) {
    console.log('[USER_FETCH_ERROR]', error);

    throw Error('Failed to fetch user');
    // return null;
  }
});

export default getUser;
