interface Sheep {
    name: string;
    color: string;
}

const isValid = (sheep: Sheep): boolean => {
    return (sheep.color === 'rojo') &&
    (sheep.name.toLowerCase().includes('a')) &&
    (sheep.name.toLowerCase().includes('n'));
};

export function filterSheeps(sheeps: Sheep[]): Sheep[] {
    const validSheeps: Sheep[] = [];
    for (const sheep of sheeps) {
        if (isValid(sheep)) {
            validSheeps.push(sheep);
        }
    }
    return validSheeps;
}
