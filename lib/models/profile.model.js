import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true },
    role:        { type: String, required: true },
    description: { type: String, required: true },
    email:       { type: String, required: true },
    location:    { type: String, required: true },
    avatarUrl:   { type: String },
    cvUrl:       { type: String },
    githubUrl:   { type: String },
    linkedinUrl: { type: String },
    whatsapp:    { type: String },
  },
  { timestamps: true }
);

const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);

export default Profile;
