export function getMissingNumbers(numbers: number[]): number[] {
	const missingNumbers: number[] = [];
	const min = Math.min(...numbers);
	const max = Math.max(...numbers);
	for (let i = min; i <= max; i++) {
		if (!numbers.includes(i)) {
			missingNumbers.push(i);
		}
	}
	return missingNumbers;
}
