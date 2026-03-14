import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./slices/roomsSlice";
import cartReducer from "./slices/cartSlice";
import bookingsReducer from "./slices/bookingsSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cart: cartReducer,
    bookings: bookingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
