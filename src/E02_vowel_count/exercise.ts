export function getVowelCount(text: string): number {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
	const textInLowerCase = text.toLowerCase();

	let total = 0;

	for (let index = 0; index < textInLowerCase.length; index += 1) {
		if (vowels.includes(textInLowerCase[index])) {
			total += 1;
		}
	}
	return total;
}

// SOLUCIÓN ALTERNATIVA
// Usando función reduce y normalizando el texto.
export function getVowelCountAlt(text: string): number {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const normalizedText = normalizeText(text);

	const charsArray = normalizedText.toLowerCase().split('');

	return charsArray.reduce((total, currentChar) => {
		if (vowels.includes(currentChar)) return total + 1;
		return total;
	}, 0);
}

/**
 * Normaliza el texto eliminando los acentos y caracteres compuestos.
 * Devuelve la su versión normalizada del texto (ej: camión -> camion )
 * @param str
 * @returns
 */

function normalizeText(str: string): string {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.trim();
}
