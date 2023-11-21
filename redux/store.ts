import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import shoppingReducer from './shoppingSlice';
import { WebStorage } from 'redux-persist';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';


export function createPersistStore(): WebStorage {
  const isServer = typeof window === "undefined"
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null)
      },
      setItem() {
        return Promise.resolve()
      },
      removeItem() {
        return Promise.resolve()
      }
    }
  }
  return createWebStorage('local')
}


const storage = typeof window !== 'undefined'
  ? createWebStorage('local')
  : createPersistStore();

const persistConfig = { key: 'root', version: 1, storage };

const persistedReducer = persistReducer(persistConfig, shoppingReducer);


export const store = configureStore({
  reducer: { shopping: persistedReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



