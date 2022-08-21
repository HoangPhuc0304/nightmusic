import mongoose from 'mongoose'
const Schema = mongoose.Schema

const themeSchema = new Schema(
  {
    mainColor: { type: String, require: true },
    styleColor: { type: String, require: true },
    darkColor: { type: String, require: true },
    textColor: { type: String, require: true },
    textChangeColor: { type: String, require: true },
    image: { type: String, default: '' },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Theme', themeSchema)
