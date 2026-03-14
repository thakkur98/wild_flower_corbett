import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Room } from "./roomsSlice";

export interface CartItem {
  room: Room;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(
        (i) => i.room.id === action.payload.room.id
      );
      if (!existing) state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.room.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (sum, i) => sum + i.room.pricePerNight * i.nights,
    0
  );
