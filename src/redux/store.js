import { configureStore } from '@reduxjs/toolkit';
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
import { contactsReducer, filterReducer } from './contactReduser';

const contactsPersistConfig = {
  key: 'contact',
  storage,
  whitelist: ['contacts'],
};

const filterPersistConfig = {
  key: 'filter',
  storage,
  whitelist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contactsState: persistReducer(contactsPersistConfig, contactsReducer),
    filterState: persistReducer(filterPersistConfig, filterReducer),
  },
  //щоб синхронізувати локальне сховище зі стейтом і потім стейт з лок. сховищем
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
