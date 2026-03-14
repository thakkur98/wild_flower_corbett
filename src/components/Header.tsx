"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HOTEL_CONTACT, telLink } from "@/lib/config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/bookings", label: "How to book" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-hotel-navy/95 backdrop-blur border-b border-hotel-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="relative flex items-center h-10 md:h-12 w-[160px] md:w-[200px] shrink-0" aria-label="Corbett Wild Flower — Home">
            <Image
              src="/logo.png"
              alt="Corbett Wild Flower Resort & Spa"
              fill
              className="object-contain object-left"
              priority
              sizes="200px"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-hotel-gold"
                    : "text-hotel-cream/90 hover:text-hotel-gold"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={HOTEL_CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-hotel-gold/40 bg-hotel-gold/10 text-hotel-gold hover:bg-hotel-gold/20 hover:border-hotel-gold/60 transition-colors shrink-0"
              aria-label="View location on map"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
            <a
              href={telLink(HOTEL_CONTACT.phone)}
              className="hidden sm:inline-flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full border border-hotel-gold/50 bg-hotel-gold/10 text-hotel-gold text-sm font-semibold hover:bg-hotel-gold hover:text-hotel-navy hover:border-hotel-gold transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              aria-label="Call us"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-hotel-gold/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
                </svg>
              </span>
              Call us
            </a>
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="p-2 text-hotel-cream/90 hover:text-hotel-gold transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-hotel-gold/20 bg-hotel-navy">
            <nav className="py-4 flex flex-col gap-1">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 text-base font-medium transition-colors ${
                    pathname === href
                      ? "text-hotel-gold bg-hotel-gold/10"
                      : "text-hotel-cream/90 hover:bg-hotel-gold/10 hover:text-hotel-gold"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={HOTEL_CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mx-4 px-4 py-3 rounded-xl border border-hotel-gold/40 bg-hotel-gold/10 text-hotel-gold font-medium flex items-center justify-center gap-2 hover:bg-hotel-gold/20 transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View on map
              </a>
              <a
                href={telLink(HOTEL_CONTACT.phone)}
                onClick={closeMobileMenu}
                className="mx-4 mt-2 px-4 py-3 rounded-xl border border-hotel-gold/40 bg-hotel-gold/10 text-hotel-gold font-medium flex items-center justify-center gap-2 hover:bg-hotel-gold/20 transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
                </svg>
                Call us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
