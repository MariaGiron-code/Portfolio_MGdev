import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title:       { type: String,   required: true },
    description: { type: String,   required: true },
    techStack:   { type: [String], required: true },
    category:    { type: String,   required: true, enum: ['frontend', 'backend', 'fullstack'] },
    featured:    { type: Boolean,  required: true, default: false },
    repoUrl:     { type: String },
    liveUrl:     { type: String },
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;
