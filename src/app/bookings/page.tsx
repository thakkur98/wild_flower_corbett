"use client";

import Link from "next/link";
import { HOTEL_CONTACT, telLink } from "@/lib/config";

export default function BookingsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="font-serif text-3xl text-hotel-navy">How to book</h1>
      <p className="mt-4 text-hotel-charcoal/80">
        We don’t take payment online. Send an inquiry or call the hotel — they’ll confirm availability and complete your reservation with you.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90"
        >
          Send inquiry
        </Link>
        <a
          href={telLink(HOTEL_CONTACT.phone)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-hotel-navy text-hotel-navy font-semibold rounded-lg hover:bg-hotel-navy/5"
        >
          <span aria-hidden>📞</span> Call {HOTEL_CONTACT.phone}
        </a>
      </div>
      <p className="mt-6 text-sm text-hotel-charcoal/70">
        You can also add rooms to your inquiry list from the Rooms page, then send one message with your selection.
      </p>
      <Link href="/rooms" className="inline-block mt-4 text-hotel-gold font-medium hover:underline">
        Browse rooms →
      </Link>
    </div>
  );
}
