export function workWithArray(origArr: [number]) {
    const arr = [];
    for (const elem of origArr) {
        if (elem % 3 == 0 && elem % 5 == 0) {
            arr.push('FizzBuzz');
        } else if (elem % 3 == 0) {
            arr.push('Fizz');
        } else if (elem % 5 == 0) {
            arr.push('Buzz');
        } else {
            arr.push(elem);
        }
    }
    return arr;
}

