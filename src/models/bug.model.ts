import mongoose, { Schema, Document } from "mongoose";

export interface BugDocument extends Document {
  title: string;
  description: string;
  source: string;
  severity: string;
  raised_by: mongoose.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}

const BugSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  source: { type: String, required: true },
  severity: {
    type: String,
    enum: ["Critical", "Major", "Medium", "Low"],
    required: true,
  },
  raised_by: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const bugModel = mongoose.model<BugDocument>("Bug", BugSchema);
export default bugModel;
