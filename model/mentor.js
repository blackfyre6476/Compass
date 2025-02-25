import mongoose from 'mongoose';


const mentorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, required: true, unique: true },
  expertise: { type: String, required: true },
  educationalQualifications: { type: String, required: true },
  jobTitle: { type: String, required: true },
  experience: { type: String, required: true, enum: ['0-3 years', '3-10 years', '10+ years'] },
  bio: { type: String, required: true, maxlength: 500 },
  profilePicture: { type: String }, 
});

export default mongoose.model('Mentor', mentorSchema);

