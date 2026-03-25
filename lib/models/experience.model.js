import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    company:      { type: String, required: true },
    role:         { type: String, required: true },
    startDate:    { type: Date, required: true },
    endDate:      { type: Date },
    description:  { type: String },
    technologies: { type: [String] },
  },
  { timestamps: true }
);

const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);

export default Experience;
