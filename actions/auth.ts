'use server';

import { z } from 'zod';
import { PASSWORD_REGEX, USERNAME_REGEX } from '../constants';
import { getSession } from '@/data/DAL';
import User, { UserInterface, UserSchemaInterface } from '@/models/user';
import connectToDatabase from '@/lib/connectToDatabase';
import { nanoid } from 'nanoid';
import Session from '@/models/session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const registerUser = async (previousState: any, formData: FormData) => {
  try {
    console.log('previousState', previousState);
    // verify session..?
    console.log('connecting to database...');
    await connectToDatabase();
    console.log('connected to database!');
    const session = await getSession();

    console.log('session', session);

    if (session) {
      return {
        error: 'An active session was found. Logout to create a new account.',
      };
    }

    const formDataObject = Object.fromEntries(formData);

    const schema = z
      .object({
        username: z
          .string()
          .nonempty('Username is required')
          //   .min(3, 'Username is too short')
          //   .max(15, 'Username is too long')
          .refine(
            (value) => USERNAME_REGEX.test(value),
            'Username must be between 3-15 characters, and can only contain letters and numbers'
          ),
        password: z
          .string()
          .nonempty('Password is required')
          .refine(
            (value) => PASSWORD_REGEX.test(value),
            'Password must be 8-16 characters long, and contain at least one numeric digit, and special character'
          ),
        confirm_password: z.string().nonempty('Please confirm your password'),
      })
      .refine((data) => data.password === data.confirm_password, {
        path: ['confirm_password'],
        message: 'Passwords do not match',
      });

    const { success, error, data } = schema.safeParse(formDataObject);

    if (!success) {
      console.log('errors', error.flatten().fieldErrors);
      return { errors: error.flatten().fieldErrors };
    }

    const { username, password } = data;

    // check if username is taken
    const usernameTaken = await User.findOne({ username });

    if (usernameTaken) {
      // console.log('username is already taken');
      return {
        error: 'Username is already taken.',
      };
    }

    // register user and create session
    // const user: UserSchemaInterface = new User({
    //   username,
    //   password,
    // });

    // await user.save();

    const user: UserInterface = await User.create({
      username,
      password,
    });

    console.log('user', user);

    const new_session_id = nanoid();

    // ! wrap in trycatch and redirect to login page in catch block..?
    await Session.create({
      user_id: user._id,
      session_id: new_session_id,
    });

    cookies().set('session_id', new_session_id);

    // redirect('/profile');
    // return { success: true, data: user.toObject() };
    return { success: true, data: user };
  } catch (error: any) {
    console.log('[SERVER_ACTION_ERROR]', error);
    return {
      error: 'Something went wrong.',
    };
  }
};
