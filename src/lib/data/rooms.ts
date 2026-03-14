export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  pricePerNight: number;
  image: string;
  images: string[];
  capacity: number;
  size: string;
  amenities: string[];
  featured?: boolean;
}

export const ROOMS: Room[] = [
  {
    id: "1",
    name: "Jacuzzi Rooms",
    slug: "jacuzzi-rooms",
    description:
      "Spacious room with a private balcony and Hill view, designed for comfort with modern amenities.",
    pricePerNight: 5500,
    image: "/rooms/jacuzzi-1.png",
    images: [
      "/rooms/jacuzzi-1.png",
      "/rooms/jacuzzi-2.png",
      "/rooms/jacuzzi-3.png",
    ],
    capacity: 2,
    size: "326 sq feet",
    amenities: ["Private Jacuzzi", "Balcony", "Hill View", "King Bed", "Modern Amenities"],
    featured: true,
  },
  {
    id: "2",
    name: "Pool View Rooms",
    slug: "pool-view-rooms",
    description:
      "We have 8 fully furnished rooms with modern technology fittings and fixtures in this category. These rooms make your stay a memorable one when you stand in the balcony of the room and enjoy the pool activities all through the day.",
    pricePerNight: 4500,
    image: "/rooms/pool-view-1.png",
    images: [
      "/rooms/pool-view-1.png",
      "/rooms/pool-view-2.png",
    ],
    capacity: 2,
    size: "326 sq feet",
    amenities: [
      "King Size Bed",
      "LED Television",
      "Air Conditioner",
      "Sofa and Table",
      "Tea & Coffee Kettle",
      "Room Service",
      "Wardrobes and Shelf",
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Balcony with Garden View",
    slug: "balcony-garden-view",
    description:
      "We have 16 fully furnished rooms with modern technology fittings and fixtures in this category. The presence of a delicate aroma in these rooms all through the day enhances the basic instinct of sense of smell.",
    pricePerNight: 4500,
    image: "/rooms/balcony-garden-1.png",
    images: [
      "/rooms/balcony-garden-1.png",
      "/rooms/balcony-garden-2.png",
      "/rooms/balcony-garden-3.png",
    ],
    capacity: 2,
    size: "326 sq feet",
    amenities: [
      "King Size Bed",
      "LED Television",
      "Air Conditioner",
      "Sofa and Table",
      "Tea & Coffee Kettle",
      "Room Service",
      "Wardrobes and Shelf",
    ],
    featured: true,
  },
];

export const FEATURED_ROOMS = ROOMS.filter((r) => r.featured);
