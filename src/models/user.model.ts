// models/User.ts
import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  avatar: string;
  email: string;
  password: string;
  created_at: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const userModel = mongoose.model<UserDocument>("User", UserSchema);
export default userModel;
