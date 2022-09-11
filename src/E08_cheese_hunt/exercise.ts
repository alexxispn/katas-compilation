enum DirectionEnum {
	up = 'up',
	down = 'down',
	left = 'left',
	right = 'right',
}

type DirectionType = keyof typeof DirectionEnum;
type MousePosition = { x: number; y: number };

const FOOD_SYMBOL = '*';
const MOUSE_SYMBOL = 'm';

export function canMouseEat(direction: DirectionType, game: string[][]): boolean {
	const currentPosition = getCurrentMousePosition(game);
	if (!currentPosition) return false;
	const { x, y } = currentPosition;

	if (direction === DirectionEnum.up) {
		const invalidPosition = x - 1 < 0;
		if (invalidPosition) return false;
		return game[x - 1][y] === FOOD_SYMBOL;
	}

	if (direction === DirectionEnum.down) {
		const invalidPosition = x + 1 >= game.length;
		if (invalidPosition) return false;
		return game[x + 1][y] === FOOD_SYMBOL;
	}

	if (direction === DirectionEnum.left) {
		const invalidPosition = y - 1 < 0;
		if (invalidPosition) return false;
		return game[x][y - 1] === FOOD_SYMBOL;
	}

	if (direction === DirectionEnum.right) {
		const invalidPosition = y + 1 >= game[x].length;
		if (invalidPosition) return false;
		return game[x][y + 1] === FOOD_SYMBOL;
	}

	return false;
}

function getCurrentMousePosition(game: string[][]): MousePosition | null {
	for (let x = 0; x < game.length; x += 1) {
		for (let y = 0; y < game[x].length; y += 1) {
			if (game[x][y] === MOUSE_SYMBOL) {
				return { x, y };
			}
		}
	}
	return null;
}
