import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  skillName: { type: String, required: true, unique: true },
});

export default mongoose.model('Skill', skillSchema);
