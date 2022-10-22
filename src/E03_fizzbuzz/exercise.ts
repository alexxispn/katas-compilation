export function fizzBuzz(): string[] {
    const result: string[] = [];
    for (let number = 1; number <= 100; number += 1) {
        if (number % 3 === 0 && number % 5 === 0) {
            result.push('FizzBuzz');
        } else if (number % 3 === 0) {
            result.push('Fizz');
        } else if (number % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(number.toString());
        }
    }
    return result;
}

export function fizzBuzzAlt(): string[] {
    const result: string[] = [];
    for (let number = 1; number <= 100; number += 1) {
        let output = '';
        if (number % 3 === 0) output += 'Fizz';
        if (number % 5 === 0) output += 'Buzz';
        if (output === '') output = number.toString();
        result.push(output);
    }
    return result;
}
