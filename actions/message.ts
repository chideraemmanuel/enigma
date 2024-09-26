'use server';

import connectToDatabase from '@/lib/connectToDatabase';
import Message from '@/models/message';
import { z } from 'zod';

export const sendMessage = async (
  userId: any,
  previousState: any,
  formData: FormData
) => {
  //   console.log('previousState', previousState);
  //   console.log('userId', userId);
  //   console.log('formData', formData);

  const message = formData.get('message');

  const { success, error, data } = z
    .string()
    .min(1, 'Enter a message')
    .min(3, 'Message is too short')
    .safeParse(message);

  if (!success) {
    console.log('error.format()._errors', error.format()._errors);
    return { errors: error.format()._errors };
  }

  try {
    await connectToDatabase();
    // send message
    await Message.create({
      user_id: userId,
      message: data,
    });

    return { success: true };
  } catch (error: any) {
    console.log('[SERVER_ACTION_ERROR]', error);
    return { error: 'Something went wrong' };
  }
};
