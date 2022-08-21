import mongoose from 'mongoose'
const Schema = mongoose.Schema

const resourceSchema = new Schema(
  {
    background: { type: Array },
    books: { type: Array },
    charts: { type: Array },
    patterns: { type: Array },
    slides: { type: Array },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Resource', resourceSchema)
