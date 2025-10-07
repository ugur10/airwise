import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { loyaltyRouter } from "./routes/loyalty";
import type { AppBindings } from "./types";

export const createApp = () => {
  const app = new Hono<AppBindings>();
  const bunOrigin = typeof Bun !== "undefined" ? Bun.env.AIRWISE_ALLOWED_ORIGIN : undefined;
  const allowedOrigin = bunOrigin ?? process.env.AIRWISE_ALLOWED_ORIGIN ?? "*";

  app.use("*", logger());
  app.use(
    "*",
    cors({
      origin: allowedOrigin,
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["GET", "POST", "OPTIONS"],
      maxAge: 60 * 60,
      credentials: allowedOrigin !== "*"
    })
  );

  app.get("/health", (c) =>
    c.json({
      status: "ok",
      service: "airwise-api"
    })
  );

  app.route("/v1/loyalty", loyaltyRouter);

  return app;
};
