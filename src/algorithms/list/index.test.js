import chai from 'chai'
import { describe } from 'mocha'
import deepEqualInAnyOrder from 'deep-equal-in-any-order';
import { SkipList } from './'

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

describe('List algorithms', () => {
    it('Skip list size works', () => {
        let skipList = new SkipList(5);
        skipList.insert(1);
        skipList.insert(3);
        skipList.insert(10);

        expect(skipList.size()).to.equal(3);
    })
})