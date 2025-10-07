import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { calculateProgramRankings } from "../services/calculator";
import { PROGRAMS } from "../data/programs";
import type { ApiSuccessResponse, AppBindings, TravelProfileInput } from "../types";

const travelProfileSchema = z.object({
  homeAirport: z
    .string()
    .length(3)
    .transform((value) => value.toUpperCase()),
  annualFlights: z.number().int().min(0).max(200),
  routeType: z.enum(["domestic", "international", "mixed"]),
  cabinClass: z.enum(["economy", "premiumEconomy", "business"])
});

export const loyaltyRouter = new Hono<AppBindings>();

loyaltyRouter.get("/", (c) =>
  c.json<ApiSuccessResponse<{ programs: typeof PROGRAMS }>>({
    data: {
      programs: PROGRAMS
    }
  })
);

loyaltyRouter.post(
  "/rankings",
  zValidator("json", travelProfileSchema, (result, c) => {
    if (!result.success) {
      return c.json(
        {
          error: "Invalid travel profile",
          details: result.error.flatten()
        },
        400
      );
    }
  }),
  (c) => {
    const payload = c.req.valid("json") as TravelProfileInput;
    const rankings = calculateProgramRankings(payload);

    return c.json<ApiSuccessResponse<{ rankings: typeof rankings }>>({
      data: {
        rankings
      }
    });
  }
);
