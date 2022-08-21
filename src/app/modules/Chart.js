import mongoose from 'mongoose'
const Schema = mongoose.Schema

const chartSchema = new Schema(
  {
    startedTime: { type: Date },
    finishedTime: { type: Date },
    songs: { type: Array, default: null },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Chart', chartSchema)
