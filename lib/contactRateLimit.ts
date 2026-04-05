import { Redis } from "@upstash/redis";

const FALLBACK_WINDOW_MS = 60_000;
const FALLBACK_MAX_KEYS = 2_000;
const fallbackRecentSubmissions = new Map<string, number>();

const redisClient =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;
const isProduction = process.env.NODE_ENV === "production";

function cleanupFallback(now: number) {
  if (fallbackRecentSubmissions.size <= FALLBACK_MAX_KEYS) return;
  for (const [key, timestamp] of fallbackRecentSubmissions) {
    if (now - timestamp > FALLBACK_WINDOW_MS) {
      fallbackRecentSubmissions.delete(key);
    }
  }
}

function isFallbackRateLimited(email: string, now: number) {
  cleanupFallback(now);
  const key = email.toLowerCase();
  const lastSubmissionAt = fallbackRecentSubmissions.get(key) ?? 0;
  if (now - lastSubmissionAt < FALLBACK_WINDOW_MS) {
    return true;
  }
  fallbackRecentSubmissions.set(key, now);
  return false;
}

export async function isContactSubmissionRateLimited(email: string) {
  const now = Date.now();
  if (!redisClient) {
    return isFallbackRateLimited(email, now);
  }

  try {
    const key = `ratelimit:contact:${email.toLowerCase()}`;
    const attempts = await redisClient.incr(key);
    if (attempts === 1) {
      await redisClient.expire(key, Math.ceil(FALLBACK_WINDOW_MS / 1000));
    }
    return attempts > 1;
  } catch {
    return isFallbackRateLimited(email, now);
  }
}
