// Last updated: 25/03/2026, 21:41:29
function createHelloWorld() {
    
    return function(...args): string {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */