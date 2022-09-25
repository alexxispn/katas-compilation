export function getVowelCount(text: string): number {
    let count = 0;
    const vowels = 'aeiouáéíóú';
    text.toLowerCase()
        .split('')
        .forEach(letter => {
            if (vowels.includes(letter)) {
                count++;
            }
        });
    return count;
}
