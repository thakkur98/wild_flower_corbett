import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-hotel-gold font-serif text-6xl mb-2">404</p>
        <h1 className="font-serif text-2xl text-hotel-navy mb-3">
          Page not found
        </h1>
        <p className="text-hotel-charcoal/80 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90 transition-colors"
        >
          Back to Home
        </Link>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/rooms" className="text-hotel-gold hover:underline">
            Rooms
          </Link>
          <Link href="/contact" className="text-hotel-gold hover:underline">
            Contact
          </Link>
          <Link href="/about" className="text-hotel-gold hover:underline">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
