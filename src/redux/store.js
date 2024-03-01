import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { configureStore } from '@reduxjs/toolkit';
import { psychologistsReducer } from './slice';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'name'],
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  psychologists: persistReducer(authPersistConfig, psychologistsReducer),
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
