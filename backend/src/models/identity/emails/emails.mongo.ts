import mongoose, { Document, Schema } from "mongoose";

// Define interface for email document
interface IEmail extends Document {
  user: any; // Reference to User table
  email: string;
  isActive: boolean;
  unsubscribe: boolean;
  createdDate: Date;
  updatedDate: Date;
}

// Define schema for the Email model
const EmailSchema = new Schema<IEmail>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  unsubscribe: { type: Boolean, default: false },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
});

// Define and export the Email model
const EmailModel = mongoose.model<IEmail>("Email", EmailSchema);
export default EmailModel;
