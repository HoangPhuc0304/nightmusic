import mongoose from 'mongoose'
const Schema = mongoose.Schema

const transSchema = new Schema(
  {
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    coins: { type: Number, required: true },
    status: { type: Number, default: 'pending' },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Trans', transSchema)
