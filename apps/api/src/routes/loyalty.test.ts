import { describe, expect, it } from "vitest";
import { createApp } from "../app";

const app = createApp();

describe("Loyalty routes", () => {
  it("returns program catalog", async () => {
    const response = await app.request("/v1/loyalty");
    expect(response.status).toBe(200);
    const json = await response.json();

    expect(Array.isArray(json.data.programs)).toBe(true);
    expect(json.data.programs.length).toBeGreaterThanOrEqual(4);
  });

  it("orders loyalty programs by estimated value", async () => {
    const payload = {
      homeAirport: "JFK",
      annualFlights: 18,
      routeType: "mixed",
      cabinClass: "premiumEconomy"
    };

    const response = await app.request("/v1/loyalty/rankings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    });

    expect(response.status).toBe(200);
    const json = await response.json();

    expect(Array.isArray(json.data.rankings)).toBe(true);
    expect(json.data.rankings).toHaveLength(5);
    expect(json.data.rankings[0].estimatedValue).toBeGreaterThanOrEqual(
      json.data.rankings[json.data.rankings.length - 1].estimatedValue
    );
  });

  it("validates incoming travel profile structures", async () => {
    const response = await app.request("/v1/loyalty/rankings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        homeAirport: "NYC",
        annualFlights: -2,
        routeType: "unknown",
        cabinClass: "economy"
      })
    });

    expect(response.status).toBe(400);
  });
});
