interface Sheep {
    name: string;
    color: string;
}

const hasValidName = (sheep: Sheep): boolean => sheep.name.toLowerCase()
    .includes('a') && sheep.name.toLowerCase()
    .includes('n');
const hasValidColor = (sheep: Sheep): boolean => sheep.color === 'rojo';

export function filterSheeps(sheeps: Sheep[]): Sheep[] {
    return sheeps.filter(sheep => hasValidName(sheep) && hasValidColor(sheep));
}
