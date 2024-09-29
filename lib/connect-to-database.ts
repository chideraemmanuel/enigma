import mongoose from 'mongoose';

const connectToDatabase = async () =>
  mongoose.connect(process.env.DATABASE_URI!);

export default connectToDatabase;
