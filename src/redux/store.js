import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import songSlice from './slices/songSlice'
import userSlice from './slices/userSlice'
import videoSlice from './slices/videoSlice'
import layoutSlice from './slices/layoutSlice'
import playlistSlice from './slices/playlistSlice'
import singerSlice from './slices/singerSlice'
import librarySlice from './slices/librarySlice'

const rootReducer = combineReducers({
  user: userSlice.reducer,
  song: songSlice.reducer,
  video: videoSlice.reducer,
  layout: layoutSlice.reducer,
  playlist: playlistSlice.reducer,
  singer: singerSlice.reducer,
  library: librarySlice.reducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export { rootReducer }
export default store
