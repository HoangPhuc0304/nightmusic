import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
import slug from 'mongoose-slug-generator'
const Schema = mongoose.Schema

const playlistSchema = new Schema(
  {
    type: { type: String, required: true },
    img: { type: String, required: true },
    color: { type: String, required: true },
    songs: { type: Array, default: null },
    slug: { type: String, slug: 'type', unique: true },
    duration: { type: Number, default: 0 },
    plays: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
)

mongoose.plugin(slug)
playlistSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
})

export default mongoose.model('Playlist', playlistSchema)
