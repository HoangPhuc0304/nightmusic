import mongoose from 'mongoose'
const Schema = mongoose.Schema

const songSchema = new Schema(
  {
    song: { type: String, required: true },
    name: { type: Array, required: true },
    img: { type: String, default: '' },
    avatar: { type: String, default: '' },
    type: { type: Array, required: true },
    audio: { type: String, required: true },
    length: { type: Number, default: null },
    link: { type: String, required: true },
    plays: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Song', songSchema)
