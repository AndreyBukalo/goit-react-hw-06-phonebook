import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";
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
import { combineReducers } from 'redux';


const reducer = combineReducers({
  contacts: contactReducer,
  filter: filtersReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['filter'],
};

const persistedContacts = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);