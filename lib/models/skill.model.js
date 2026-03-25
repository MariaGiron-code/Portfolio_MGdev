import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true },
    category: { type: String, required: true },
    level:    { type: String },
  },
  { timestamps: true }
);

const Skill = mongoose.models.Skill || mongoose.model('Skill', SkillSchema);

export default Skill;
