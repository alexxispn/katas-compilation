export function reverseText(text: string): string {
	const words = text.split(' ');
	const reversedWords = words.reverse();
	return reversedWords.join(' ');
}
