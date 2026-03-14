import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "./cartSlice";

export interface Booking extends CartItem {
  id: string;
  createdAt: string;
  status: "confirmed" | "pending" | "cancelled";
}

interface BookingsState {
  list: Booking[];
}

const initialState: BookingsState = {
  list: [],
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Omit<Booking, "id" | "createdAt" | "status">>) => {
      state.list.push({
        ...action.payload,
        id: `BK-${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: "confirmed",
      });
    },
    setBookingStatus: (
      state,
      action: PayloadAction<{ id: string; status: Booking["status"] }>
    ) => {
      const b = state.list.find((x) => x.id === action.payload.id);
      if (b) b.status = action.payload.status;
    },
  },
});

export const { addBooking, setBookingStatus } = bookingsSlice.actions;
export default bookingsSlice.reducer;

export const selectBookings = (state: { bookings: BookingsState }) =>
  state.bookings.list;
