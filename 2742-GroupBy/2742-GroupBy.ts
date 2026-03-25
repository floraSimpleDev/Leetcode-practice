// Last updated: 25/03/2026, 21:42:02
interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function<T>(fn) {
    const result: Record<string, T[]> = {};

    for (const value of this) {
        const key = fn(value);

        (result[key] = result[key] || []).push(value);
    }

    return result;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */