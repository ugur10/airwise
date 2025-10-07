import { PROGRAMS } from "../data/programs";
import type {
  LoyaltyProgramDefinition,
  ProgramCalculationResult,
  TierProjection,
  TravelProfileInput
} from "../types";

const AVERAGE_SPEND_BY_ROUTE: Record<TravelProfileInput["routeType"], number> = {
  domestic: 320,
  international: 840,
  mixed: 520
};

const CABIN_SPEND_MULTIPLIER: Record<TravelProfileInput["cabinClass"], number> = {
  economy: 1,
  premiumEconomy: 1.5,
  business: 3.2
};

const clampProgress = (value: number): number => {
  if (Number.isNaN(value) || !Number.isFinite(value)) {
    return 0;
  }
  return Math.min(1, Math.max(0, value));
};

const formatCurrency = (value: number): number => Number(value.toFixed(2));

const determineTierProjection = (
  program: LoyaltyProgramDefinition,
  earnedPoints: number
): TierProjection => {
  const thresholds = [...program.tierThresholds].sort(
    (a, b) => a.pointsRequired - b.pointsRequired
  );

  if (thresholds.length === 0) {
    return {
      currentTier: "General Member",
      nextTier: null,
      progressToNext: 1,
      pointsToNext: null
    };
  }

  for (let i = 0; i < thresholds.length; i += 1) {
    const tier = thresholds[i];
    if (!tier) {
      continue;
    }
    if (earnedPoints < tier.pointsRequired) {
      const previousTier = thresholds[i - 1];
      const floorPoints = previousTier ? previousTier.pointsRequired : 0;
      const span = tier.pointsRequired - floorPoints || 1;

      return {
        currentTier: previousTier ? previousTier.tier : "General Member",
        nextTier: tier.tier,
        progressToNext: clampProgress((earnedPoints - floorPoints) / span),
        pointsToNext: Math.max(tier.pointsRequired - earnedPoints, 0)
      };
    }
  }

  const topTier = thresholds[thresholds.length - 1]!;
  return {
    currentTier: topTier.tier,
    nextTier: null,
    progressToNext: 1,
    pointsToNext: null
  };
};

export const calculateProgramRankings = (
  profile: TravelProfileInput
): ProgramCalculationResult[] => {
  const baseSpendPerFlight =
    AVERAGE_SPEND_BY_ROUTE[profile.routeType] * CABIN_SPEND_MULTIPLIER[profile.cabinClass];
  const assumedAnnualSpend = baseSpendPerFlight * profile.annualFlights;

  const results = PROGRAMS.map<ProgramCalculationResult>((program) => {
    const spendAdjustedForProgram = assumedAnnualSpend * program.routeBonuses[profile.routeType];
    const pointsEarned = spendAdjustedForProgram * program.earnRates[profile.cabinClass];
    const estimatedValue = formatCurrency(pointsEarned * program.pointValue);
    const effectiveEarnRate =
      spendAdjustedForProgram > 0
        ? Number((estimatedValue / spendAdjustedForProgram).toFixed(4))
        : 0;
    const projectedTier = determineTierProjection(program, pointsEarned);

    return {
      programId: program.id,
      programName: program.name,
      alliance: program.alliance,
      estimatedPoints: Math.round(pointsEarned),
      estimatedValue,
      predictedTier: projectedTier,
      effectiveEarnRate,
      assumedAnnualSpend: Math.round(spendAdjustedForProgram),
      highlights: program.featureHighlights,
      brandColor: program.brandColor
    };
  });

  return results.sort((a, b) => b.estimatedValue - a.estimatedValue);
};
