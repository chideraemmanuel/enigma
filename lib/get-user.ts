import { getSession } from '@/data/DAL';
import User, { UserInterface, UserSchemaInterface } from '@/models/user';
import { cache } from 'react';
import connectToDatabase from './connectToDatabase';
import { ObjectId } from 'mongoose';

const getUser = cache(async () => {
  try {
    await connectToDatabase();
    const session = await getSession();

    if (!session) return null;

    const user = await User.findById<UserSchemaInterface>(session.user_id);

    if (!user) return null; // TODO: delete cookie..?

    return {
      _id: user._id as ObjectId,
      username: user.username,
      email: user.email,
    };
    // return user;
  } catch (error: any) {
    console.log('[USER_FETCH_ERROR]', error);

    throw Error('Failed to fetch user');
    // return null;
  }
});

export default getUser;
