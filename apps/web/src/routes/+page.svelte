<script lang="ts">
  import AppShell from "@components/layout/AppShell.svelte";
  import TravelProfileForm from "@features/input/components/TravelProfileForm.svelte";
  import ProgramRankings from "@features/results/components/ProgramRankings.svelte";
  import type { TravelProfile } from "@features/input/types";
  import type { ProgramRanking } from "@features/results/types";

  const profile = $state<TravelProfile>({
    homeAirport: "JFK",
    annualFlights: 12,
    routeType: "mixed",
    cabinClass: "premiumEconomy"
  });

  let rankings = $state<ProgramRanking[]>([]);
  let loading = $state(false);

  const mockRanking = (override: Partial<ProgramRanking> = {}): ProgramRanking => ({
    programId: "united-mileageplus",
    programName: "United MileagePlus",
    alliance: "Star Alliance",
    estimatedPoints: 128750,
    estimatedValue: 1673,
    predictedTier: {
      currentTier: "Premier Platinum",
      nextTier: "Premier 1K",
      progressToNext: 0.62,
      pointsToNext: 5400
    },
    effectiveEarnRate: 0.13,
    assumedAnnualSpend: 12900,
    highlights: [
      "Excursionist Perk unlocks free one-way in award itineraries",
      "Premier Platinum yields 2 regional upgrades each year",
      "Star Alliance Gold lounge access worldwide"
    ],
    brandColor: "#005DAA",
    ...override
  });

  const fetchRecommendations = async (payload: TravelProfile) => {
    loading = true;

    // Placeholder until API wiring in later checkpoint
    await new Promise((resolve) => setTimeout(resolve, 400));
    rankings = [
      mockRanking(),
      mockRanking({
        programId: "delta-skymiles",
        programName: "Delta SkyMiles",
        alliance: "SkyTeam",
        estimatedValue: 1498,
        predictedTier: {
          currentTier: "Platinum Medallion",
          nextTier: "Diamond Medallion",
          progressToNext: 0.48,
          pointsToNext: 7300
        },
        brandColor: "#C8102E"
      }),
      mockRanking({
        programId: "aa-aadvantage",
        programName: "American AAdvantage",
        alliance: "Oneworld",
        estimatedValue: 1420,
        predictedTier: {
          currentTier: "Platinum Pro",
          nextTier: "Executive Platinum",
          progressToNext: 0.36,
          pointsToNext: 8200
        },
        brandColor: "#0078D2"
      })
    ];

    loading = false;
    console.info("Submitted travel profile", payload);
  };
</script>

<AppShell
  headline="Model your loyalty ROI across carriers"
  description="Plug in your travel habits, see which airline unlocks the highest value, and understand the elite journey required to get there."
>
  <div slot="primary" class="mx-auto w-full max-w-5xl">
    <TravelProfileForm
      on:change={(event: CustomEvent<TravelProfile>) => {
        profile.homeAirport = event.detail.homeAirport;
        profile.annualFlights = event.detail.annualFlights;
        profile.routeType = event.detail.routeType;
        profile.cabinClass = event.detail.cabinClass;
      }}
      on:submit={(event: CustomEvent<TravelProfile>) => {
        profile.homeAirport = event.detail.homeAirport;
        profile.annualFlights = event.detail.annualFlights;
        profile.routeType = event.detail.routeType;
        profile.cabinClass = event.detail.cabinClass;
        fetchRecommendations(event.detail);
      }}
    />
  </div>

  <div slot="secondary" class="w-full">
    <ProgramRankings data={rankings} loading={loading} />
  </div>
</AppShell>
