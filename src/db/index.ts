import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "postgres";

import { env } from "@/env/server";

import * as schema from "./schema/index";

export const client = postgres(env.DATABASE_URL, {
  max: env.DB_MIGRATING ? 1 : undefined,
});

const db = drizzle(env.DATABASE_URL!, { schema });

export default db;
