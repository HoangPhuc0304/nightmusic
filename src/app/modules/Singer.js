import mongoose from 'mongoose'
const Schema = mongoose.Schema

const singerSchema = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    songs: { type: Array, default: null },
    duration: { type: Number, default: 0 },
    plays: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Singer', singerSchema)
