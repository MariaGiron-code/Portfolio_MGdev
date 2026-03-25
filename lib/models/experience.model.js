import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema(
  {
    company:      { type: String, required: true },
    role:         { type: String, required: true },
    startDate:    { type: Date,   required: true },
    endDate:      { type: Date,   default: null },
    location:     { type: String },
    description:  { type: String },
    technologies: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Experience = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);

export default Experience;
