export const isValidParens = (input: string[]) => {
    const map: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const stack: string[] = [];

    for (let char of input) {
        const closingParen = map[char];
        const lastPushed = stack[stack.length - 1];

        if (closingParen) {
            if (lastPushed == closingParen) {
                stack.pop();
                continue;
            }

            return false;
        } else {
            stack.push(char)
        }
    }

    if (stack.length) {
        return false
    }

    return true
}

export class MinStack {
    stack: [number, number, number][];

    constructor() {
        // [val, min_index, max_index]
        this.stack = [];
    }

    push(val: number) {
        const currentVal: [number, number, number] = [val, 0, 0];

        if (this.stack.length) {
            const [, lastMinIndex, lastMaxIndex] = this.stack[this.stack.length - 1];

            // min
            if (this.stack[lastMinIndex][0] > val) {
                currentVal[1] = this.stack.length;
            } else {
                currentVal[1] = lastMinIndex;
            }

            // max
            if (this.stack[lastMaxIndex][0] > val) {
                currentVal[2] = lastMaxIndex;
            } else {
                currentVal[2] = this.stack.length;
            }
        }

        this.stack.push(currentVal);

        return null
    }

    pop() {
        if (!this.stack.length) {
            return null;
        }

        const l = this.stack.pop();

        // return if necessary
        // if (l && l[0] !== null) {
        //     return l[0];
        // }

        return null;
    }

    // max
    top() {
        if (!this.stack.length) {
            return null;
        }

        const lastElement = this.stack[this.stack.length - 1];

        if (lastElement && lastElement[2] !== null) {
            return this.stack[lastElement[2]][0]
        }

        return null;
    }

    // min
    getMin() {
        if (!this.stack.length) {
            return null;
        }

        const lastElement = this.stack[this.stack.length - 1];

        if (lastElement && lastElement[1] !== null) {
            return this.stack[lastElement[1]][0]
        }

        return null;
    }
}

// Only works for Input: tokens = ["1","2","+","3","*","4","-"]
// To revisit
export const evaluateReversePolishNotation = (input: string[]) => {
    const stack: string[] = [];

    const tokens = ['+', '-', '*', '/'];
    let expressionValues: number[] = [];

    let position = 0;

    while (position < input.length) {
        const char = input[position];
        const first = expressionValues[0];
        const second = expressionValues[1];

        if (tokens.includes(char)) {
            let result = 0;

            switch (char) {
                case tokens[0]:
                    result = first + second;
                    break;
                case tokens[1]:
                    result = first - second;
                    break;
                case tokens[2]:
                    result = first * second;
                    break;
                case tokens[3]:
                    result = first / second;
                    break;
            }

            expressionValues = [result];
        } else {
            expressionValues.push(Number(char));
        }

        position += 1;
    }

    return expressionValues[0];
}
