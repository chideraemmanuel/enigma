import connectToDatabase from '@/lib/connect-to-database';
import User, { UserInterface } from '@/models/user';
import { Metadata, ResolvingMetadata } from 'next';
import React, { FC } from 'react';

interface GenerateMetadataProps {
  params: { username: string };
}

export async function generateMetadata(
  { params: { username } }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  await connectToDatabase();
  const user = await User.findOne<UserInterface>({
    username: username.toLowerCase().trim(),
  });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Leave Anonymous Feedback for ${user?.username} | Enigma`,
    description: `Share your thoughts anonymously with ${user?.username} on Enigma. Send messages or give feedback without revealing your identity`,
    // keywords: "${user?.username}, anonymous feedback, anonymous messages, leave feedback, Enigma, feedback link, send message, honest feedback",
    openGraph: {
      // images: [imageURL, ...previousImages],
      title: `Send Anonymous Feedback to ${user?.username} | Enigma`,
      description: `Connect with ${user?.username} and share your honest thoughts anonymously through Enigma. A safe space for open, anonymous feedback.`,
      // url: 'https://enigmaa.vercel.app',
      url: `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/${username}`,
    },
  };
}

interface Props {
  children: React.ReactNode;
}

const SendMessageLayout: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default SendMessageLayout;
