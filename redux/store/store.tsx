import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import locationReducer from "../features/locationDataSlice";
import weatherReducer from "../features/weatherSlice";

export const store = configureStore({
  reducer: {
    locations: locationReducer,
    weathercondition: weatherReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// export type WeaatherStatae = ReturnTyp<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
