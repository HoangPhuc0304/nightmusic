import mongoose from 'mongoose'
const Schema = mongoose.Schema

const historySchema = new Schema(
  {
    songs: { type: Array, default: null },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('History', historySchema)
