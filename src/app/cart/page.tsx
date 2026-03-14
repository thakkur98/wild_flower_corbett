"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  clearCart,
} from "@/lib/slices/cartSlice";
import { formatPrice } from "@/lib/config";

export default function CartPage() {
  const router = useRouter();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  const handleSendInquiry = () => {
    const lines = items.map(
      (item) =>
        `- ${item.room.name}: ${item.checkIn} to ${item.checkOut}, ${item.nights} night(s), ${item.guests} guest(s). Est. ${formatPrice(item.room.pricePerNight * item.nights)}`
    );
    const summary = [
      "I'm interested in the following:",
      "",
      ...lines,
      "",
      `Total (estimate): ${formatPrice(total)}`,
    ].join("\n");
    dispatch(clearCart());
    router.push(`/contact?inquiry=${encodeURIComponent(summary)}`);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-3xl text-hotel-navy">Your inquiry list is empty</h1>
        <p className="mt-2 text-hotel-charcoal/80">
          Add rooms you’re interested in, then send one inquiry to the hotel. No payment online — they’ll contact you.
        </p>
        <Link
          href="/rooms"
          className="inline-block mt-6 px-6 py-3 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90"
        >
          Browse Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl text-hotel-navy mb-2">Request a quote</h1>
      <p className="text-hotel-charcoal/80 mb-8">
        No payment here — send an inquiry and the hotel will contact you to confirm availability and payment.
      </p>
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.room.id}
            className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-xl shadow-md border border-hotel-cream"
          >
            <div className="relative w-full sm:w-40 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.room.image}
                alt={item.room.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-serif text-xl text-hotel-navy">{item.room.name}</h2>
              <p className="text-sm text-hotel-charcoal/80 mt-1">
                {item.checkIn} → {item.checkOut} · {item.nights} night
                {item.nights > 1 ? "s" : ""} · {item.guests} guest
                {item.guests > 1 ? "s" : ""}
              </p>
              <p className="mt-2 font-semibold text-hotel-navy">
                {formatPrice(item.room.pricePerNight * item.nights)} (estimate)
              </p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.room.id))}
              className="self-start sm:self-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-hotel-cream">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-hotel-charcoal">Total (estimate)</span>
          <span className="font-serif text-2xl text-hotel-navy">{formatPrice(total)}</span>
        </div>
        <p className="text-sm text-hotel-charcoal/70 mt-2">
          Final rate and availability will be confirmed by the hotel when they contact you.
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={handleSendInquiry}
            className="flex-1 py-3 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90 transition-colors"
          >
            Send inquiry to hotel
          </button>
          <Link
            href="/rooms"
            className="flex-1 py-3 border-2 border-hotel-navy text-hotel-navy font-semibold rounded-lg text-center hover:bg-hotel-navy/5 transition-colors"
          >
            Add more rooms
          </Link>
        </div>
      </div>
    </div>
  );
}
