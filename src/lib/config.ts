/**
 * Hotel contact info – used for Call links and inquiry emails.
 */
export const HOTEL_CONTACT = {
  name: "Corbett Wild Flower",
  phone: "+15551234567",
  email: "hello@corbettwildflower.com",
  address: "Neeripur, Chhoi, Ramnagar, Uttarakhand 244715, India",
  locationNote: "Near Jim Corbett National Park, Nainital district. About 8.5 km from Ramnagar railway station.",
  /** Google Maps place URL – opens in Maps app on mobile or browser */
  mapUrl: "https://www.google.com/maps/place/Corbett+Wild+Flower+Resort+And+Spa/@29.3338374,79.1376809,21z/data=!4m9!3m8!1s0x390a6d16fe39b15f:0xf6382f975c5c1d5b!5m2!4m1!1i2!8m2!3d29.3338374!4d79.1376809!16s%2Fg%2F11lyz6gb7q?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
} as const;

/** Format phone for tel: link (digits only) */
export function telLink(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

/** Currency for display (INR) */
export const CURRENCY = { symbol: "₹", code: "INR" } as const;

/** Format price for display (e.g. ₹4,500) */
export function formatPrice(amount: number): string {
  return `${CURRENCY.symbol}${amount.toLocaleString("en-IN")}`;
}
