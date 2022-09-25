enum PokemonTypeEnum {
    fire = 'fire',
    water = 'water',
    grass = 'grass',
    electric = 'electric',
}

type PokemonType = keyof typeof PokemonTypeEnum;

function getEffectivity(attackerType: PokemonType, defenderType: PokemonType): number {
    const isSuperEffective: boolean =
        (attackerType === 'water' && defenderType === 'fire') ||
        (attackerType === 'fire' && defenderType === 'grass') ||
        (attackerType === 'grass' && defenderType === 'water') ||
        (attackerType === 'electric' && defenderType === 'water');

    const isNormalEffective: boolean =
        (attackerType === 'water' && defenderType === 'electric') ||
        (attackerType === 'fire' && defenderType === 'electric') ||
        (attackerType === 'grass' && defenderType === 'electric') ||
        (attackerType === 'electric' && defenderType === 'fire');

    if (isSuperEffective) return 2;
    if (isNormalEffective) return 1;
    return 0.5;
}

export function getAttackDamage(
    attackerType: PokemonType,
    defenderType: PokemonType,
    attack: number,
    defense: number
): number {
    const areStatsInvalid: boolean = attack <= 0 || defense <= 0 || attack > 100 || defense > 100;
    if (areStatsInvalid) return -1;
    const effectivity = getEffectivity(attackerType, defenderType);
    const damage = 50 * (attack / defense) * effectivity;
    return Number(damage.toFixed(2));
}
