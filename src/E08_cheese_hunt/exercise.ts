enum DirectionEnum {
	up = 'up',
	down = 'down',
	left = 'left',
	right = 'right',
}

type DirectionType = keyof typeof DirectionEnum;
const MOUSE_SYMBOL = 'm';
const CHEESE_SYMBOL = '*';
const getMousePosition = (room: string[][]): any => {
	for (let y = 0; y < room.length; y++) {
		for (let x = 0; x < room[y].length; x++) {
			if (room[y][x] === MOUSE_SYMBOL) {
				return { x, y };
			}
		}
	}
};

export function canMouseEat(direction: DirectionType, game: string[][]): boolean {
	const mousePosition = getMousePosition(game);
	if (!mousePosition) return false;
	let { x, y } = mousePosition;
	const cantEatUp = y === 0;
	const cantEatDown = y === game.length - 1;
	const cantEatLeft = x === 0;
	const cantEatRight = x === game[y].length - 1;

	if (direction === DirectionEnum.up) {
		if (cantEatUp) return false;
		y--;
	} else if (direction === DirectionEnum.down) {
		if (cantEatDown) return false;
		y++;
	} else if (direction === DirectionEnum.left) {
		if (cantEatLeft) return false;
		x--;
	} else if (direction === DirectionEnum.right) {
		if (cantEatRight) return false;
		x++;
	}
	return game[y][x] === CHEESE_SYMBOL;
}
