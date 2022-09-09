export function reverseText(text: string): string {
	const textArray = text.split(' ');
	const resultArray: string[] = [];
	for (let index = textArray.length - 1; index >= 0; index -= 1) {
		resultArray.push(textArray[index]);
	}
	const resultConvertedToStr = resultArray.join(' ');
	return resultConvertedToStr;
}

// SOLUCIÓN ALTERNATIVA
// Usando la función "reverse" de los array
export function reverseTextAlt(text: string): string {
	return text.split(' ').reverse().join(' ');
}
