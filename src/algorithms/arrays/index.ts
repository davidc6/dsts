// Longest consecutive number

export const longest = (a: number[]): number => {
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