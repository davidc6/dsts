import { expect } from 'chai'
import { describe } from 'mocha'
import { longest } from './'

describe('Array algorithms', () => {
    it('Longest consecutive sequence', () => {
        const arr = [0, 3, 2, 5, 4, 6, 1, 1];

        const val = longest(arr);

        expect(val).to.equal(7);
    })
});
