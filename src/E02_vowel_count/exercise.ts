export function getVowelCount(text: string): number {
	let count = 0;
	const vowels = 'aeiouáéíóú';
	for (let i = 0; i < text.length; i++) {
		if (vowels.toUpperCase().includes(text.toUpperCase()[i])) {
			count++;
		}
	}
	return count;
}
