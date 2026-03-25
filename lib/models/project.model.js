import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true },
    description: { type: String, required: true },
    techStack:   { type: [String], required: true },
    category:    { 
      type: String, 
      enum: ['frontend', 'backend', 'fullstack'],
      required: true},
    featured:    { type: Boolean, default: false },
    repoUrl:     { type: String },
    liveUrl:     { type: String },
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
