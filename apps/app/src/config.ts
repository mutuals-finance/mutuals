// Dev Flags

export const nodeEnv = process.env.NODE_ENV ?? "development";
export const isDevelopment = nodeEnv === "development";
export const isProduction = nodeEnv === "production";
export const isTest = process.env.NODE_ENV === "test";
export const isStorybook = Boolean(process.env.STORYBOOK);
export const isSsr = typeof window === "undefined";
export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL ?? "info";

// Site Details

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "Mutuals";
export const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "The best way to manage on-chain payments";
export const siteLogo =
  process.env.NEXT_PUBLIC_SITE_LOGO_URL ?? "/images/logo.png";
const defaultSiteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
export const siteUrl =
  isProduction && process.env.NEXT_PUBLIC_CANONICAL_URL
    ? process.env.NEXT_PUBLIC_CANONICAL_URL
    : defaultSiteUrl;
export const siteContactEmail =
  process.env.NEXT_PUBLIC_SITE_CONTACT_EMAIL ?? "";
export const siteCopyrightText = "Mutuals Finance, Inc.";

/**
 * 0 = no refetch
 */
export const sessionRefetchInterval = 0;

/* Collections */

export const collectionsPageSize = 12;

// Sentry

export const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN ?? "";
