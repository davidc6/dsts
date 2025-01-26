import { describe } from 'mocha'
import { expect } from 'chai'
import { evaluateReversePolishNotation, isValidParens, MinStack } from './'

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

        it('works with a different combination', () => {
            const expected = [null, null, null, null, 0, null, 0, null, 2, 0];
            const actual = [];

            const minStack = new MinStack();
            actual.push(null);
            actual.push(minStack.push(13));
            actual.push(minStack.push(20));
            actual.push(minStack.push(7));
            actual.push(minStack.push(53));
            actual.push(minStack.push(8));

            expect(minStack.getMin()).to.equal(7);
            actual.push(minStack.push(0));
            expect(minStack.getMin()).to.equal(0); // return 0

            actual.push(minStack.pop());
            expect(minStack.top()).to.equal(53);
            expect(minStack.getMin()).to.equal(7);

            minStack.pop();
            minStack.pop();

            expect(minStack.getMin()).to.equal(7);
            expect(minStack.top()).to.equal(20);

            minStack.pop();
            minStack.pop();

            expect(minStack.getMin()).to.equal(13);
            expect(minStack.top()).to.equal(13);

            minStack.pop();

            expect(minStack.getMin()).to.be.null;
            expect(minStack.top()).to.be.null;
        });
    });

    describe('Reverse Polish notation', () => {
        it('works', () => {
            const input = ["1", "2", "+", "3", "*", "4", "-"]
            const output = evaluateReversePolishNotation(input);

            expect(output).to.equal(5);
        });
    });
});

