import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl text-hotel-navy mb-2">About Corbett Wild Flower</h1>
      <p className="text-hotel-charcoal/80 mb-8">
        Our story and what makes your stay special.
      </p>

      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10 shadow-lg">
        <Image
          src="/hero-banner.png"
          alt="Corbett Wild Flower Resort and Spa — pool and resort at night"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-hotel-navy max-w-none">
        <p className="text-hotel-charcoal/90 leading-relaxed">
          Corbett Wild Flower Resort and Spa has been welcoming guests for over three
          decades. What began as a small seaside inn has grown into a beloved
          destination where luxury and relaxation meet.
        </p>
        <p className="text-hotel-charcoal/90 leading-relaxed mt-4">
          Every room is designed with your comfort in mind—from our Jacuzzi Rooms
          to our Balcony Garden View. Our team is dedicated to making
          your stay memorable, whether you&apos;re here for business, a wedding, or
          a quiet escape.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/home-view-2.png"
              alt="Resort grounds and open sky at Corbett Wild Flower"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/home-view-3.png"
              alt="Pool and gardens at Corbett Wild Flower"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="font-serif text-2xl text-hotel-navy mt-12">About the hotel</h2>
        <p className="text-hotel-charcoal/80 mt-2">Amenities and services we offer for a comfortable stay.</p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
          {[
            "Welcome Drinks",
            "Free Wifi",
            "24 Hour Room Service",
            "SPA",
            "Swimming Pool & Kids Pool",
            "Multicuisine Restaurant",
            "Free Private Parking",
            "Indoor & Outdoor Recreation",
            "Pet Friendly Property",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 py-2 text-hotel-charcoal/90"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-hotel-gold/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl text-hotel-navy mt-12">Our Values</h2>
        <ul className="list-disc pl-6 text-hotel-charcoal/90 space-y-2 mt-4">
          <li>Hospitality that feels personal</li>
          <li>Sustainability in every decision</li>
          <li>Excellence in service and design</li>
        </ul>
      </div>
    </div>
  );
}
