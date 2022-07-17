// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { linkRouter } from "./link";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge(linkRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
