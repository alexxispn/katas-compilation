/* eslint-disable @typescript-eslint/no-unused-vars */
enum PokemonTypeEnum {
	fire = 'fire',
	water = 'water',
	grass = 'grass',
	electric = 'electric',
}
type PokemonType = keyof typeof PokemonTypeEnum;

export function getAttackDamage(
	attackerType: PokemonType,
	defenderType: PokemonType,
	attack: number,
	defense: number
): number {
	// Escribe tu código aquí
	return 0;
}
