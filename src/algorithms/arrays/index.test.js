import chai from 'chai'
import { describe } from 'mocha'
import deepEqualInAnyOrder from 'deep-equal-in-any-order';
import { longestConsecutiveNumber, flattenDeeplyNestedArray, topKElements, groupAnagrams } from './'

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

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

    it('Flatten deeply nested  array', () => {
        const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        const val = flattenDeeplyNestedArray(arr, 1);

        expect(val).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]);
    });

    it('Top K elements', () => {
        const arr = [1, 1, 2, 3, 5, 5, 1];
        const k = 2;

        const result = topKElements(arr, k);
        expect(result).to.deep.equal([1, 5]);
    });

    it('Group anagrams', () => {
        const input = ["act", "pots", "tops", "cat", "stop", "hat"];
        const result = groupAnagrams(input);

        console.log(result);

        expect(result).to.deep.equalInAnyOrder([["hat"], ["act", "cat"], ["stop", "pots", "tops"]]);
        console.log(result);
    });
});
