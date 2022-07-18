import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  email: { type: String, required: true, lowercase: true, unique: true },
  workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout' }],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
