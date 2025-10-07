export type RouteType = "domestic" | "international" | "mixed";
export type CabinClass = "economy" | "premiumEconomy" | "business";

export interface TravelProfile {
  homeAirport: string;
  annualFlights: number;
  routeType: RouteType;
  cabinClass: CabinClass;
}
