// your drizzle instance
import { BetterAuthOptions, betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { organization } from "better-auth/plugins";

import db from "@/db";
import { env } from "@/env/server";
import { ac, admin, member, owner } from "@/lib/permissions";

export const auth = betterAuth({
  plugins: [
    organization({
      ac: ac,
      roles: {
        owner,
        admin,
        member,
      },
    }),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
      },
    },
  },
  secret: env.BETTER_AUTH_SECRET,
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;
