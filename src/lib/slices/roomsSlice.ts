import { createSlice } from "@reduxjs/toolkit";
import { ROOMS } from "@/lib/data/rooms";
import type { Room } from "@/lib/data/rooms";

interface RoomsState {
  items: Room[];
  loading: boolean;
}

const initialState: RoomsState = {
  items: ROOMS,
  loading: false,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
});

export default roomsSlice.reducer;
export type { Room } from "@/lib/data/rooms";
export const selectAllRooms = (state: { rooms: RoomsState }) => state.rooms.items;
export const selectFeaturedRooms = (state: { rooms: RoomsState }) =>
  state.rooms.items.filter((r) => r.featured);
export const selectRoomBySlug = (state: { rooms: RoomsState }, slug: string) =>
  state.rooms.items.find((r) => r.slug === slug);
