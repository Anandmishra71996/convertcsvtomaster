import mongoose, { Document, Schema } from 'mongoose';

// Define interface for user document
interface IIdentity extends Document {
  id: string;
  firstname: string;
  lastname: string;
  email2?: string; // Optional field
  profession: string;
}

// Define schema for the User model
const UserSchema = new Schema<IIdentity>({
  id: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email2: { type: String }, // Optional field
  profession: { type: String, required: true },
});

// Define and export the User model
const IdentityModel = mongoose.model<IIdentity>('User', UserSchema);
export default IdentityModel;
