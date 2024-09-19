/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
};

const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

export default withPWA(pwaConfig)(nextConfig);
