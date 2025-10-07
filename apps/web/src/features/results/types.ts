import type { CabinClass, RouteType } from "../input/types";

export interface ProgramRanking {
  programId: string;
  programName: string;
  alliance: string;
  estimatedPoints: number;
  estimatedValue: number;
  predictedTier: {
    currentTier: string;
    nextTier: string | null;
    progressToNext: number;
    pointsToNext: number | null;
  };
  effectiveEarnRate: number;
  assumedAnnualSpend: number;
  highlights: string[];
  brandColor: string;
}

export interface RecommendationRequest {
  homeAirport: string;
  annualFlights: number;
  routeType: RouteType;
  cabinClass: CabinClass;
}
