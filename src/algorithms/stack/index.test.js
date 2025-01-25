
import { describe } from 'mocha'
import { expect } from 'chai'
import { isValidParens, MinStack } from './'

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
    });

    describe('MinStack', () => {
        it('works', () => {
            // const input = ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"];
            const expected = [null, null, null, null, 0, null, 2, 1];
            const actual = [];

            const minStack = new MinStack();
            actual.push(null);
            actual.push(minStack.push(1));
            actual.push(minStack.push(2));
            actual.push(minStack.push(0));

            actual.push(minStack.getMin()); // return 0
            actual.push(minStack.pop());
            actual.push(minStack.top());    // return 2
            actual.push(minStack.getMin()); // return 1

            expect(actual).to.deep.equal(expected);
        });

        it('works with duplicate elements', () => {
            const expected = [null, null, null, null, 0, null, 0, null, 2, 0];
            const actual = [];

            const minStack = new MinStack();
            actual.push(null);
            actual.push(minStack.push(1));
            actual.push(minStack.push(2));
            actual.push(minStack.push(0));

            actual.push(minStack.getMin()); // return 0
            actual.push(minStack.push(0));
            actual.push(minStack.getMin()); // return 0

            actual.push(minStack.pop());
            actual.push(minStack.top());    // return 2
            actual.push(minStack.getMin()); // return 1

            expect(actual).to.deep.equal(expected);
        });
    });
});

