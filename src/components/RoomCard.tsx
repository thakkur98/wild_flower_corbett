"use client";

import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/lib/data/rooms";
import { formatPrice } from "@/lib/config";

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

export function RoomCard({ room, featured }: RoomCardProps) {
  return (
    <Link
      href={`/rooms/${room.slug}`}
      className={`group block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 ${
        featured ? "md:flex" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${featured ? "md:w-1/2 md:min-h-[280px]" : "aspect-[4/3]"}`}
      >
        <Image
          src={room.image}
          alt={room.name}
          width={800}
          height={600}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute top-3 left-3 px-2 py-1 bg-hotel-gold text-hotel-navy text-xs font-semibold rounded">
          From {formatPrice(room.pricePerNight)}/night
        </div>
      </div>
      <div
        className={`p-5 ${featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}
      >
        <h3 className="font-serif text-hotel-navy text-xl mb-2 group-hover:text-hotel-gold transition-colors">
          {room.name}
        </h3>
        <p className="text-hotel-charcoal/80 text-sm line-clamp-2 mb-3">
          {room.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="text-xs bg-hotel-cream text-hotel-charcoal px-2 py-0.5 rounded"
            >
              {a}
            </span>
          ))}
        </div>
        <span className="inline-block mt-3 text-hotel-gold text-sm font-medium group-hover:underline">
          View details →
        </span>
      </div>
    </Link>
  );
}
