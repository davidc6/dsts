import { iterateOverObjects } from '.'

import { describe } from 'mocha'
import { expect } from 'chai'

describe('050325 work', () => {
    it('Iterate over the objects', () => {
        const value = iterateOverObjects(
            { 'char-1': 'a', 'char-2': 'b', 'char-3': 'c' },
        );
        expect(value).to.deep.equal({ '1': 'a-char', '2': 'b-char', '3': 'c-char' });
    })
})
