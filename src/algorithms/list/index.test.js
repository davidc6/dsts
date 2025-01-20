import { describe } from 'mocha'
import { expect } from 'chai'
import { SkipList } from './'

describe('List algorithms', () => {
    it('Skip list size works', () => {
        let skipList = new SkipList(5);
        skipList.insert(1);
        skipList.insert(3);
        skipList.insert(10);

        // level 5 value null
        // level 2 value 1
        // level 2 value 3
        // level 1 value 10
        // console.log(skipList.head.next[0]);

        // console.log(

        // let v = skipList.head;

        // console.log(skipList.head.next[0])

        // while (v) {
        //     let i = 0;
        //     let cell = v.next[i];

        //     while (cell) {
        //         console.log('level: ', cell.level, ' | value: ', cell.value)
        //         i += 1;
        //     }

        //     v = v.next[0]
        // }

        console.log(skipList.print());



        // expect(skipList.size()).to.equal(3);
    })
})
