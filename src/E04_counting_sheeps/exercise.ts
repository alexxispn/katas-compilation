interface Sheep {
	name: string;
	color: string;
}

export function filterSheeps(sheeps: Sheep[]): Sheep[] {
	return sheeps.filter((sheep: Sheep) => {
		const matchesFilter =
			sheep.color === 'rojo' &&
			sheep.name.toLowerCase().includes('a') &&
			sheep.name.toLowerCase().includes('n');
		return matchesFilter;
	});
}
