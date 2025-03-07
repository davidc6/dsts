import { canAttendMeetings } from '.'

import { describe } from 'mocha'
import { expect } from 'chai'

describe('060325 work', () => {
    it('Meeting rooms (unsorted)', () => {
        const value = canAttendMeetings([[15, 20], [0, 30], [5, 10]]);
        expect(value).to.equal(false);
    })

    it('Meeting rooms (sorted)', () => {
        const value = canAttendMeetings([[5, 8], [9, 15]]);
        expect(value).to.equal(true);
    })
})
