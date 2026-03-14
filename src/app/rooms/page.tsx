"use client";

import { useAppSelector } from "@/lib/hooks";
import { selectAllRooms } from "@/lib/slices/roomsSlice";
import { RoomCard } from "@/components/RoomCard";

export default function RoomsPage() {
  const rooms = useAppSelector(selectAllRooms);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-hotel-navy">Our Rooms</h1>
        <p className="mt-2 text-hotel-charcoal/80">
          Choose from our selection of luxurious accommodations.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
