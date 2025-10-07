import { createApp } from "./app";

const app = createApp();

const port = typeof Bun !== "undefined" ? Number(Bun.env.PORT ?? 8787) : 8787;

if (import.meta.main && typeof Bun !== "undefined" && typeof Bun.serve === "function") {
  console.info(`Starting AirWise API on http://localhost:${port}`);
  Bun.serve({
    port,
    fetch: app.fetch,
    error: (err: unknown) => {
      console.error("Unhandled error in AirWise API:", err);
      return new Response("Internal Server Error", { status: 500 });
    }
  });
}

export default app;
