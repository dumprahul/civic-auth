import { createCivicAuthPlugin } from "@civic/auth/nextjs"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "86634583-cf04-4ea9-836c-a1128eeac46e"
});

export default withCivicAuth(nextConfig)