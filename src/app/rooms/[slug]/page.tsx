"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { selectAllRooms } from "@/lib/slices/roomsSlice";
import Link from "next/link";
import { HOTEL_CONTACT, telLink, formatPrice } from "@/lib/config";

export default function RoomDetailPage() {
  const params = useParams();
  const rooms = useAppSelector(selectAllRooms);
  const room = rooms.find((r) => r.slug === params.slug);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = room?.images ?? [];

  const goPrev = () => {
    setCurrentIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  };
  const goNext = () => {
    setCurrentIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  };

  if (!room) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl text-hotel-navy">Room not found</h1>
        <Link href="/rooms" className="text-hotel-gold mt-4 inline-block">
          ← Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/rooms"
        className="text-hotel-gold hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Rooms
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {/* Main image with prev/next carousel */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`${room.name} — photo ${currentIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-200"
              priority={currentIndex === 0}
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-hotel-navy transition-colors"
                  aria-label="Previous photo"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-hotel-navy transition-colors"
                  aria-label="Next photo"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
                  {currentIndex + 1} / {images.length}
                </span>
              </>
            )}
          </div>
          {/* Thumbnails — click to change main image */}
          {images.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === i
                      ? "border-hotel-gold ring-2 ring-hotel-gold/50"
                      : "border-transparent hover:border-hotel-charcoal/30"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${room.name} — photo ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="font-serif text-3xl text-hotel-navy">{room.name}</h1>
          <p className="text-hotel-charcoal/80 mt-2">{room.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span>Capacity: {room.capacity} guests</span>
            <span>Size: {room.size}</span>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {room.amenities.map((a) => (
              <li
                key={a}
                className="px-3 py-1 bg-hotel-cream rounded-full text-sm"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-hotel-cream">
            <p className="text-2xl font-serif text-hotel-navy">
              {formatPrice(room.pricePerNight)}
              <span className="text-base font-sans font-normal text-hotel-charcoal/80">
                {" "}
                / night
              </span>
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full py-3 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90 transition-colors text-center block"
              >
                Send inquiry
              </Link>
              <a
                href={telLink(HOTEL_CONTACT.phone)}
                className="w-full py-2.5 text-center border-2 border-hotel-navy text-hotel-navy font-semibold rounded-lg hover:bg-hotel-navy/5 transition-colors block"
              >
                Call to book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
