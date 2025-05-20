interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  staleWhileRevalidate?: boolean;
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class Cache {
  private static instance: Cache;
  private cache: Map<string, CacheEntry<any>>;
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutes

  private constructor() {
    this.cache = new Map();
  }

  static getInstance(): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache();
    }
    return Cache.instance;
  }

  async get<T>(key: string, options: CacheOptions = {}): Promise<T | null> {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const now = Date.now();
    const isExpired = now - entry.timestamp > (options.ttl || this.defaultTTL);

    if (isExpired) {
      if (options.staleWhileRevalidate) {
        // Return stale data while revalidating
        this.revalidate(key);
        return entry.data;
      }
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  set<T>(key: string, data: T, options: CacheOptions = {}): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  private async revalidate(key: string): Promise<void> {
    // Implement revalidation logic here
    // This could involve making a new API request and updating the cache
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cache = Cache.getInstance();

export async function withCache<T>(
  key: string,
  fetchFn: () => Promise<T>,
  options: CacheOptions = {}
): Promise<T> {
  const cachedData = await cache.get<T>(key, options);
  if (cachedData) return cachedData;

  const data = await fetchFn();
  cache.set(key, data, options);
  return data;
} 