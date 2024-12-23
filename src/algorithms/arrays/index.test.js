import { expect } from 'chai'
import { describe } from 'mocha'
import { longestConsecutiveNumber, flattenDeeplyNestedArray } from './'

describe('Array algorithms', () => {
    it('Longest consecutive sequence', () => {
        const arr = [0, 3, 2, 5, 4, 6, 1, 1];
        const val = longestConsecutiveNumber(arr);

        expect(val).to.equal(7);
    });

    it('Flatten deeply nested  array', () => {
        const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        const val = flattenDeeplyNestedArray(arr, 2);

        expect(val).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
});
