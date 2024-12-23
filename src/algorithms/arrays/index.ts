// Longest consecutive number

export const longestConsecutiveNumber = (a: number[]): number => {
    let longest = 0;

    const numbers = new Set(a);

    for (const val of numbers) {
        if (!numbers.has(val - 1)) {
            let length = 1;

            while (numbers.has(val + length)) {
                length++;
            }
            longest = Math.max(longest, length);
        }
    }

    return longest;
}

export const flattenDeeplyNestedArray = (arr: any[], depth: number) => {
    if (depth == 0) {
        return arr;
    }

    let n: any[] = [];

    recurringNested(arr, depth, n);

    return n;
}

const recurringNested = (arr: any[], depth: number, n: any[]) => {
    for (const val of arr) {
        if (val instanceof Array) {
            recurringNested(val, depth - 1, n);
        } else {
            n.push(val);
        }
    }

    if (depth === 0) {
        return n;
    }

    return n
}