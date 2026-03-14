import Image from "next/image";
import Link from "next/link";
import { FEATURED_ROOMS } from "@/lib/data/rooms";
import { RoomCard } from "@/components/RoomCard";

const viewCards = [
  {
    image: "/home-view-1.png",
    title: "Resort by night",
    description:
      "Warm lights glow from every room and pathway as the resort settles into evening. Lush lawns, palm trees, and landscaped gardens frame the buildings—a peaceful retreat where comfort meets nature.",
  },
  {
    image: "/home-view-2.png",
    title: "Lawns and open sky",
    description:
      "Spacious green grounds and outdoor seating under the night sky. Our manicured lawns and gardens invite you to step outside and enjoy the calm, with the resort’s architecture and nature in harmony.",
  },
  {
    image: "/home-view-3.png",
    title: "Pool and gardens",
    description:
      "The pool glows at night beside lit pathways and greenery. Relax by the water surrounded by soft garden lighting—a beautiful view that blends modern comfort with the serenity of nature.",
  },
];

const galleryImages = [
  { src: "/gallery/hotel-1.png", alt: "Resort aerial view with pool and red-roof buildings" },
  { src: "/gallery/hotel-2.png", alt: "Resort building at dusk with warm lights" },
  { src: "/gallery/hotel-3.png", alt: "Resort buildings at twilight" },
  { src: "/gallery/hotel-4.png", alt: "Resort exterior with lawn and lighting" },
  { src: "/gallery/hotel-5.png", alt: "Resort complex at night with pool and grounds" },
  { src: "/gallery/hotel-6.png", alt: "Resort facade with archways and garden" },
];

const amenities = [
  {
    title: "Spa & Wellness",
    description: "Rejuvenate with our world-class spa treatments.",
    icon: "♨",
  },
  {
    title: "Fine Dining",
    description: "Multiple restaurants with local and international cuisine.",
    icon: "🍽",
  },
  {
    title: "Pool & Beach",
    description: "Infinity pool and private beach access.",
    icon: "🏊",
  },
  {
    title: "24/7 Concierge",
    description: "We're here to make your stay perfect.",
    icon: "🛎",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/hero-banner.png"
          alt="Corbett Wild Flower — pool and resort at night"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-hotel-cream drop-shadow-lg">
            Corbett Wild Flower
          </h1>
          <p className="mt-4 text-lg md:text-xl text-hotel-cream/90 max-w-2xl mx-auto">
            Where luxury meets the ocean. Your perfect escape awaits.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/rooms"
              className="px-8 py-3 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90 transition-colors"
            >
              Explore Rooms
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-hotel-cream text-hotel-cream font-semibold rounded-lg hover:bg-hotel-cream/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro + what this site shows */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-hotel-navy">
            Welcome to Corbett Wild Flower
          </h2>
          <p className="mt-4 text-hotel-charcoal/80">
            Nestled between the sea and the sky, our hotel offers an
            unforgettable experience. From our elegant rooms to our exceptional
            service, every detail is designed for your comfort.
          </p>
          <p className="mt-6 text-sm text-hotel-charcoal/70">
            No payment online — send an inquiry or call us. We’ll get back to you to confirm your stay.
          </p>
        </div>
      </section>

      {/* Beautiful views & nature — alternating cards */}
      <section className="bg-hotel-cream/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-hotel-navy text-center mb-12">
            Beautiful views & nature
          </h2>
          <div className="space-y-16 md:space-y-24">
            {viewCards.map((card, index) => (
              <div
                key={card.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-serif text-2xl text-hotel-navy">{card.title}</h3>
                  <p className="mt-4 text-hotel-charcoal/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms - data from shared ROOMS so it always displays */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-hotel-navy text-center mb-12">
            Featured Rooms
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} featured />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/rooms"
              className="inline-block px-6 py-3 border-2 border-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/10 transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl md:text-4xl text-hotel-navy text-center mb-12">
          Amenities & Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map(({ title, description, icon }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-white shadow-md border border-hotel-cream text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl block mb-3">{icon}</span>
              <h3 className="font-serif text-hotel-navy text-lg">{title}</h3>
              <p className="text-sm text-hotel-charcoal/80 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-hotel-cream/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-hotel-navy text-center mb-4">
            Gallery
          </h2>
          <p className="text-center text-hotel-charcoal/80 mb-12 max-w-2xl mx-auto">
            A glimpse of our resort — buildings, pool, gardens, and the natural setting.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map(({ src, alt }, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hotel-navy text-hotel-cream py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Ready for Your Getaway?
          </h2>
          <p className="mt-4 text-hotel-cream/80">
            Send an inquiry or call us — we’ll confirm availability and complete your reservation.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-hotel-gold text-hotel-navy font-semibold rounded-lg hover:bg-hotel-gold/90 transition-colors"
            >
              Send inquiry
            </Link>
            <Link
              href="/rooms"
              className="inline-block px-8 py-3 border-2 border-hotel-cream text-hotel-cream font-semibold rounded-lg hover:bg-hotel-cream/10 transition-colors"
            >
              View rooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
