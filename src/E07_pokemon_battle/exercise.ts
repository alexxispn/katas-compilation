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
	if (attack > 100 || defense > 100 || attack < 1 || defense < 1) return -1;
	const effectiveness = getTypeEffectiveness(attackerType, defenderType);
	const attackDamage = Number((50 * (attack / defense) * effectiveness).toFixed(2));
	return attackDamage;
}

function getTypeEffectiveness(attackerType: PokemonType, defenderType: PokemonType): number {
	const effectivenessTable: Record<PokemonType, Record<PokemonType, number>> = {
		fire: {
			fire: 0.5,
			water: 0.5,
			grass: 2,
			electric: 1,
		},
		water: {
			fire: 2,
			water: 0.5,
			grass: 0.5,
			electric: 1,
		},
		grass: {
			fire: 0.5,
			water: 2,
			grass: 0.5,
			electric: 1,
		},
		electric: {
			fire: 1,
			water: 2,
			grass: 0.5,
			electric: 0.5,
		},
	};

	return effectivenessTable[attackerType][defenderType];
}

// Función de efectividad de tipo (Propuesta alternativa 1).
function getTypeEffectivenessAlt(attackerType: PokemonType, defenderType: PokemonType): number {
	const attackerTable = {
		[PokemonTypeEnum.fire]: (defender: PokemonType): number => {
			if (defender === PokemonTypeEnum.grass) return 2;
			if (defender === PokemonTypeEnum.electric) return 1;
			return 0.5;
		},
		[PokemonTypeEnum.water]: (defender: PokemonType): number => {
			if (defender === PokemonTypeEnum.fire) return 2;
			if (defender === PokemonTypeEnum.electric) return 1;
			return 0.5;
		},
		[PokemonTypeEnum.grass]: (defender: PokemonType): number => {
			if (defender === PokemonTypeEnum.water) return 2;
			if (defender === PokemonTypeEnum.electric) return 1;
			return 0.5;
		},
		[PokemonTypeEnum.electric]: (defender: PokemonType): number => {
			if (defender === PokemonTypeEnum.water) return 2;
			if (defender === PokemonTypeEnum.fire) return 1;
			return 0.5;
		},
	};

	return attackerTable[attackerType](defenderType);
}
