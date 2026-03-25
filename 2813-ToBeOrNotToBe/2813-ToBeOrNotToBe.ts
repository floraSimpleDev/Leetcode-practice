// Last updated: 25/03/2026, 21:41:26
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (val2: any) => {
            if (val !== val2) throw new Error("Not Equal");
            return true;
        },

        notToBe: (val2: any) => {
            if (val === val2) throw new Error("Equal");
            return true;
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */