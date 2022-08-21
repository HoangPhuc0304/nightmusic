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
import authorSlice from './authorSlice'
import userSlice from './userSlice'
import songSlice from './songSlice'
import playlistSlice from './playlistSlice'
import singerSlice from './singerSlice'

const rootReducer = combineReducers({
  author: authorSlice.reducer,
  user: userSlice.reducer,
  song: songSlice.reducer,
  playlist: playlistSlice.reducer,
  singer: singerSlice.reducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['author'],
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
