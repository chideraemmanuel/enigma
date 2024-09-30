import connectToDatabase from '@/lib/connect-to-database';
import User from '@/models/user';
import { Metadata, ResolvingMetadata } from 'next';
import React, { FC } from 'react';

interface GenerateMetadataProps {
  params: { username: string };
}

// export async function generateMetadata(
//   { params: { username } }: GenerateMetadataProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   await connectToDatabase();
//   const user = await User.findOne({ username: username.toLowerCase().trim() });

//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: '',
//     description: '',
//     openGraph: {
//       // images: [imageURL, ...previousImages],
//       title: '',
//       description: '',
//       url: '',
//     },
//     alternates: {
//       canonical: `${process.env.CLIENT_BASE_URL}/${username}`,
//     },
//   };
// }

interface Props {
  children: React.ReactNode;
}

const SendMessageLayout: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default SendMessageLayout;
