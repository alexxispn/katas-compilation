export function getVowelCount(text: string): number {
    const vowels = 'aeiouáéíóúü';
    const charsArray = text.toLowerCase()
        .split('');
    return charsArray.reduce((count, char) => (vowels.includes(char) ? count + 1 : count), 0);
}
