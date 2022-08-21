import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },
    name: { type: String, default: '' },
    avatar: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    gender: { type: String, default: '' },
    birthday: { type: String, default: '' },
    country: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
    coins: { type: Number, default: 0 },
    energy: { type: Number, default: 20 },
  },
  {
    timestamps: true,
  },
)

UserSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
})

export default mongoose.model('User', UserSchema)
