"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HOTEL_CONTACT, telLink } from "@/lib/config";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const inquiry = params.get("inquiry");
    if (inquiry) {
      try {
        setPrefillMessage(decodeURIComponent(inquiry));
      } catch {
        setPrefillMessage(inquiry);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value ?? "";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value ?? "";
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value ?? "";
    const subject = (form.querySelector('[name="subject"]') as HTMLInputElement)?.value ?? "Website inquiry";
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value ?? "";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:${HOTEL_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl text-hotel-navy mb-2">Contact Us</h1>
      <p className="text-hotel-charcoal/80 mb-6">
        Send an inquiry or call us to check availability and rates. No payment online — we&apos;ll get back to you.
      </p>

      {/* Call option */}
      <div className="mb-8 p-4 bg-hotel-gold/10 border border-hotel-gold/30 rounded-xl">
        <p className="text-sm font-medium text-hotel-navy mb-2">Prefer to call?</p>
        <a
          href={telLink(HOTEL_CONTACT.phone)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90 transition-colors"
        >
          <span aria-hidden>📞</span>
          Call {HOTEL_CONTACT.phone}
        </a>
      </div>

      {submitted ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800">
          <p className="font-medium">Thank you!</p>
          <p className="mt-1 text-sm">
            Your email client should open with the message ready to send. Once you send it, we&apos;ll receive your inquiry and get back to you soon.
          </p>
          <Link href="/" className="inline-block mt-4 text-hotel-navy font-medium hover:underline">
            ← Back to home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-hotel-charcoal mb-1">Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 border border-hotel-charcoal/20 rounded-lg focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-hotel-charcoal mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-hotel-charcoal/20 rounded-lg focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-hotel-charcoal mb-1">Phone</label>
            <input
              name="phone"
              type="tel"
              className="w-full px-4 py-2 border border-hotel-charcoal/20 rounded-lg focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
              placeholder="Your phone (so we can call you back)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-hotel-charcoal mb-1">Subject</label>
            <input
              name="subject"
              type="text"
              className="w-full px-4 py-2 border border-hotel-charcoal/20 rounded-lg focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
              placeholder="Room inquiry / Reservation request"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-hotel-charcoal mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={prefillMessage}
              onChange={(e) => setPrefillMessage(e.target.value)}
              className="w-full px-4 py-2 border border-hotel-charcoal/20 rounded-lg focus:ring-2 focus:ring-hotel-gold focus:border-transparent resize-none"
              placeholder="Tell us your dates, room preference, number of guests, or any question..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90 transition-colors"
          >
            Send inquiry (opens email)
          </button>
        </form>
      )}

      <div className="mt-12 p-6 bg-white rounded-xl shadow-md border border-hotel-cream">
        <h2 className="font-serif text-xl text-hotel-navy mb-4">Visit Us</h2>
        <p className="text-hotel-charcoal/80">
          <strong>{HOTEL_CONTACT.name} Resort & Spa</strong>
          <br />
          {HOTEL_CONTACT.address}
          <br />
          <span className="text-sm text-hotel-charcoal/70">{HOTEL_CONTACT.locationNote}</span>
          <br />
          <br />
          Phone: <a href={telLink(HOTEL_CONTACT.phone)} className="text-hotel-gold hover:underline">{HOTEL_CONTACT.phone}</a>
          <br />
          Email: <a href={`mailto:${HOTEL_CONTACT.email}`} className="text-hotel-gold hover:underline">{HOTEL_CONTACT.email}</a>
        </p>
      </div>
    </div>
  );
}
