import Link from "next/link";
import { HOTEL_CONTACT, telLink } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-hotel-navy text-hotel-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-hotel-gold text-lg mb-4">
              {HOTEL_CONTACT.name}
            </h3>
            <p className="text-sm">
              {HOTEL_CONTACT.address}
              <br />
              <span className="text-hotel-cream/60">{HOTEL_CONTACT.locationNote}</span>
              <br />
              Phone: <a href={telLink(HOTEL_CONTACT.phone)} className="hover:text-hotel-gold transition-colors">{HOTEL_CONTACT.phone}</a>
              <br />
              <a href={`mailto:${HOTEL_CONTACT.email}`} className="hover:text-hotel-gold transition-colors">{HOTEL_CONTACT.email}</a>
            </p>
          </div>
          <div>
            <h3 className="font-serif text-hotel-gold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:text-hotel-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/bookings"
                  className="text-sm hover:text-hotel-gold transition-colors"
                >
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-hotel-gold text-lg mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">
              Subscribe for offers and news.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-hotel-gold/50 flex items-center justify-center hover:bg-hotel-gold/10 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-hotel-gold text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-hotel-gold/50 flex items-center justify-center hover:bg-hotel-gold/10 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-hotel-gold text-sm">ig</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-hotel-gold/20 text-center text-sm text-hotel-cream/60">
          © {new Date().getFullYear()} Corbett Wild Flower. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
