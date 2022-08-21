import mongoose from 'mongoose'
const Schema = mongoose.Schema

const librarySchema = new Schema(
  {
    userId: { type: String, required: true },
    list: [
      {
        songListId: { type: String, require: true },
        name: {type: String, default: 'My playlist'},
        songs: { type: Array, default: null },
      }
    ],
    favoriteSong: { type: Array, default: null },
    favoriteVideo: { type: Array, default: null },
    dislikedVideo: { type: Array, default: null },
    theme: {
      type: Object,
      default: {
        mainColor: '#3d054e',
        styleColor: 'linear-gradient(117deg,#31033e,#470e88 102%)',
        darkColor: '#290335',
        textColor: '#fff',
        textChangeColor: '#000',
        image: '',
      },
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Library', librarySchema)
