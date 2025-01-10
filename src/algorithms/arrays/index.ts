// Longest consecutive number
export const longestConsecutiveNumber = (nums: number[]): number => {
    let longest = 0;

    const numbers = new Set(nums);

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
    if (depth === 0) {
        if (arr instanceof Array) {
            for (const a of arr) {
                n.push(a);
            }

            return
        } else {
            n.push(arr);
            return
        }
    }

    for (const val of arr) {
        if (val instanceof Array) {
            recurringNested(val, depth - 1, n);
        } else {
            n.push(val);
        }
    }

    return n
}

export const topKElements = (nums: number[], k: number) => {
    const numsCount = new Map();
    let bucket: any = [];
    let result = [];

    for (const num of nums) {
        if (numsCount.has(num)) {
            numsCount.set(num, numsCount.get(num) + 1);
        } else {
            numsCount.set(num, 1);
        }
    }

    for (let [val, freq] of numsCount.entries()) {
        if (!bucket[freq]) {
            bucket[freq] = new Set().add(val)
        } else {
            bucket[freq] = bucket[freq].add(val)
        }
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            result.push(...bucket[i])
        }

        if (result.length === k) {
            break;
        }
    }

    return result;
}
