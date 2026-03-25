// Last updated: 25/03/2026, 21:41:41
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let result = init;

    return {
        increment: () => {
            return ++result;
        },
        decrement: () => {
            return --result;
        },
        reset: () => {
            result = init;
            return result;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */