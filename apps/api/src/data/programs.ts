import type { LoyaltyProgramDefinition } from "../types";

export const PROGRAMS: LoyaltyProgramDefinition[] = [
  {
    id: "united-mileageplus",
    name: "United MileagePlus",
    alliance: "Star Alliance",
    homeRegion: "United States",
    pointValue: 0.013,
    earnRates: {
      economy: 5,
      premiumEconomy: 6,
      business: 7
    },
    routeBonuses: {
      domestic: 1,
      international: 1.1,
      mixed: 1.05
    },
    tierThresholds: [
      { tier: "Premier Silver", pointsRequired: 5000, description: "Free bags & preferred seats" },
      { tier: "Premier Gold", pointsRequired: 10000, description: "Star Alliance Gold access" },
      { tier: "Premier Platinum", pointsRequired: 18000, description: "Regional upgrades" },
      { tier: "Premier 1K", pointsRequired: 26000, description: "System-wide upgrades" }
    ],
    featureHighlights: [
      "Star Alliance network reach",
      "Excursionist Perk awards",
      "Consistent business-class upgrade space"
    ],
    brandColor: "#005DAA",
    website: "https://www.united.com/en/us/fly/mileageplus.html"
  },
  {
    id: "delta-skymiles",
    name: "Delta SkyMiles",
    alliance: "SkyTeam",
    homeRegion: "United States",
    pointValue: 0.012,
    earnRates: {
      economy: 5,
      premiumEconomy: 7,
      business: 9
    },
    routeBonuses: {
      domestic: 1,
      international: 1.05,
      mixed: 1.02
    },
    tierThresholds: [
      { tier: "Silver Medallion", pointsRequired: 6000, description: "Priority boarding & MQD boost" },
      { tier: "Gold Medallion", pointsRequired: 12000, description: "SkyTeam lounge access" },
      { tier: "Platinum Medallion", pointsRequired: 18000, description: "Choice benefits & RUCs" },
      { tier: "Diamond Medallion", pointsRequired: 28000, description: "Global Upgrades & concierge" }
    ],
    featureHighlights: [
      "Free same-day confirmed changes",
      "Strong irregular ops support",
      "Sky Club partner lounge network"
    ],
    brandColor: "#C8102E",
    website: "https://www.delta.com/us/en/skymiles"
  },
  {
    id: "aa-aadvantage",
    name: "American AAdvantage",
    alliance: "Oneworld",
    homeRegion: "United States",
    pointValue: 0.0125,
    earnRates: {
      economy: 5,
      premiumEconomy: 7,
      business: 8
    },
    routeBonuses: {
      domestic: 1,
      international: 1.12,
      mixed: 1.06
    },
    tierThresholds: [
      { tier: "Gold", pointsRequired: 4000, description: "Priority check-in & 40% mileage bonus" },
      { tier: "Platinum", pointsRequired: 7500, description: "Oneworld Sapphire lounge access" },
      { tier: "Platinum Pro", pointsRequired: 12500, description: "Complimentary upgrades & RDU" },
      { tier: "Executive Platinum", pointsRequired: 20000, description: "Systemwide upgrades" }
    ],
    featureHighlights: [
      "Loyalty Point Rewards flexibility",
      "Strong partner redemption rates",
      "Flagship Lounge access at key hubs"
    ],
    brandColor: "#0078D2",
    website: "https://www.aa.com/aadvantage"
  },
  {
    id: "alaska-mileage-plan",
    name: "Alaska Mileage Plan",
    alliance: "Oneworld",
    homeRegion: "United States (West Coast)",
    pointValue: 0.017,
    earnRates: {
      economy: 4,
      premiumEconomy: 6,
      business: 8
    },
    routeBonuses: {
      domestic: 1.05,
      international: 1.18,
      mixed: 1.12
    },
    tierThresholds: [
      { tier: "MVP", pointsRequired: 3000, description: "50% bonus miles & priority boarding" },
      { tier: "MVP Gold", pointsRequired: 6000, description: "Global upgrade certificates" },
      { tier: "MVP Gold 75K", pointsRequired: 11000, description: "50K bonus miles & lounge passes" },
      { tier: "MVP Gold 100K", pointsRequired: 13500, description: "Oneworld Emerald status match" }
    ],
    featureHighlights: [
      "Best-in-class partner premium redemptions",
      "Generous elite 100K benefits",
      "Highly rated customer service"
    ],
    brandColor: "#004B8D",
    website: "https://www.alaskaair.com/mileageplan"
  },
  {
    id: "jetblue-trueblue",
    name: "JetBlue TrueBlue",
    alliance: "Independent",
    homeRegion: "United States (East Coast)",
    pointValue: 0.0135,
    earnRates: {
      economy: 6,
      premiumEconomy: 7,
      business: 9
    },
    routeBonuses: {
      domestic: 1.08,
      international: 1.04,
      mixed: 1.06
    },
    tierThresholds: [
      { tier: "Mosaic 1", pointsRequired: 4500, description: "Same-day standby & priority access" },
      { tier: "Mosaic 2", pointsRequired: 9000, description: "Mint upgrade certificates" },
      { tier: "Mosaic 3", pointsRequired: 15000, description: "FoundersCard-style perks" }
    ],
    featureHighlights: [
      "Family pooling simplicity",
      "Great experience on Mint transcon",
      "Points redeem 1:1 with no blackout dates"
    ],
    brandColor: "#003061",
    website: "https://www.jetblue.com/trueblue"
  }
];
