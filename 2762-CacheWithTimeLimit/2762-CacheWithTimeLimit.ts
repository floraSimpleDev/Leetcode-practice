// Last updated: 25/03/2026, 21:41:44
class TimeLimitedCache {
    private cache: Map<number, { value: number, timer: ReturnType<typeof setTimeout> }>;

    constructor() {
        this.cache = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const existedValue = this.cache.get(key);
        if (existedValue) {
            clearTimeout(existedValue.timer);
        }

        const timer = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, { value, timer });

        return !!existedValue;
    }
    
    get(key: number): number {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }
    
    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */