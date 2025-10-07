/* eslint-disable no-unused-vars */

interface ImportMeta {
  main?: boolean;
}

type BunServeOptions = {
  port: number;
  fetch: (request: Request) => Response | Promise<Response>;
  error?: (err: unknown) => Response | Promise<Response>;
};

declare const Bun: {
  env: Record<string, string | undefined>;
  serve?: (options: BunServeOptions) => unknown;
};
