export type CabinClass = "economy" | "premiumEconomy" | "business";

export type RouteType = "domestic" | "international" | "mixed";

export interface TravelProfileInput {
  homeAirport: string;
  annualFlights: number;
  routeType: RouteType;
  cabinClass: CabinClass;
}

export interface TierThreshold {
  tier: string;
  pointsRequired: number;
  description: string;
}

export interface LoyaltyProgramDefinition {
  id: string;
  name: string;
  alliance: "Star Alliance" | "SkyTeam" | "Oneworld" | "Independent";
  homeRegion: string;
  pointValue: number;
  earnRates: Record<CabinClass, number>;
  routeBonuses: Record<RouteType, number>;
  tierThresholds: TierThreshold[];
  featureHighlights: string[];
  brandColor: string;
  website: string;
}

export interface TierProjection {
  currentTier: string;
  nextTier: string | null;
  progressToNext: number;
  pointsToNext: number | null;
}

export interface ProgramCalculationResult {
  programId: string;
  programName: string;
  alliance: LoyaltyProgramDefinition["alliance"];
  estimatedPoints: number;
  estimatedValue: number;
  predictedTier: TierProjection;
  effectiveEarnRate: number;
  assumedAnnualSpend: number;
  highlights: string[];
  brandColor: string;
}

export interface ApiSuccessResponse<T> {
  data: T;
}

export type AppBindings = {
  Bindings: {
    AIRWISE_API_KEY?: string;
    AIRWISE_ALLOWED_ORIGIN?: string;
  };
};
