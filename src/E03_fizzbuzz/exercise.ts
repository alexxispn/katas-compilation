export function fizzBuzz(): string[] {
	const result: string[] = [];
	for (let i = 1; i <= 100; i += 1) {
		if (i % 3 === 0 && i % 5 === 0) {
			result.push('FizzBuzz');
		} else if (i % 5 === 0) {
			result.push('Buzz');
		} else if (i % 3 === 0) {
			result.push('Fizz');
		} else {
			result.push(i.toString());
		}
	}
	return result;
}
