// Last updated: 25/03/2026, 21:42:13
function createCounter(n: number): () => number {
    
    return function() {
        return n++;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */