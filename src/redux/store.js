import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartReducer'


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const stripe = require("stripe")(
//   "sk_test_51Ns5HjJ6WK6qYRkT1i7cInBWFzInNorDBZfwUeG5abq7CMquMTBNjnjXGBYNKHDSE4U4FRagwMOdit5RW8tmJ6LL00R5av1F3u"
// );

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);