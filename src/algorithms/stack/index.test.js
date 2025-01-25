
import { describe } from 'mocha'
import { expect } from 'chai'
import { isValidParens } from './'

describe.only('Stack algorithms', () => {
    describe('isValidParens()', () => {
        it('Return true', () => {
            const input = '[{()}]';

            const output = isValidParens(input);

            expect(output).to.be.true;
        });

        it('Returns false', () => {
            const input = '[{(}}]';

            const output = isValidParens(input);

            expect(output).to.be.false;
        });

        it('Returns false 2', () => {
            const input = '[{())]';

            const output = isValidParens(input);

            expect(output).to.be.false;
        });
    })
});

