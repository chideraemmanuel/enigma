import { Document, model, models, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserInterface extends Pick<Document, '_id'> {
  username: string;
  email: string | null;
  password: string;
}

export interface UserSchemaInterface extends Document {
  username: string;
  email: string | null;
  password: string;
}

const userSchema: Schema<UserSchemaInterface> = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(this.password, salt);
      this.password = hashed_password;
    } catch (error: any) {
      next(error);
    }
  }

  if (!this.isNew && this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(this.password, salt);
      this.password = hashed_password;
    } catch (error: any) {
      next(error);
    }
  }

  next();
});

const User = models.User || model('User', userSchema);

export default User;
