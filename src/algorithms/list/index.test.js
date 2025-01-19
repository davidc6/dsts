import { describe } from 'mocha'
import { expect } from 'chai'
import { SkipList } from './'

describe('List algorithms', () => {
    it('Skip list size works', () => {
        let skipList = new SkipList(5);
        skipList.insert(1);
        skipList.insert(3);
        skipList.insert(10);

        expect(skipList.size()).to.equal(3);
    })
})
