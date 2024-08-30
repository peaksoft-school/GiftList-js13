import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { authSlice } from "./authSlice/authSlice";
import { userSlice } from "./slice/userSlice";
import { newsletterSlice } from "./mailing/mailingSlice";
import { complaitsSlice } from "./complaits/complaitsSlice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [newsletterSlice.name]: newsletterSlice.reducer,
  [complaitsSlice.name]: complaitsSlice.reducer,
});

const persistConfig = {
  key: "GIFT_LIST",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
