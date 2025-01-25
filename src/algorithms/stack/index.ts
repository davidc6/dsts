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
