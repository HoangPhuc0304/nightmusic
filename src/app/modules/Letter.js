import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
const Schema = mongoose.Schema

const letterSchema = new Schema(
  {
    userId: { type: String, required: true },
    file: { type: String },
    feedback: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

LetterSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
})

export default mongoose.model('letter', letterSchema)
