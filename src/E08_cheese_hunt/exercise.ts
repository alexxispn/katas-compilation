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
    const y = room.findIndex(row => row.includes(MOUSE_SYMBOL));
    if (y === -1) return null;
    const x = room[y].findIndex(cell => cell === MOUSE_SYMBOL);
    return { x, y };
};

export function canMouseEat(direction: DirectionType, room: string[][]): boolean {
    const mousePosition = getMousePosition(room);
    if (!mousePosition) return false;
    let { x, y } = mousePosition;
    if (direction === DirectionEnum.up) {
        y--;
    } else if (direction === DirectionEnum.down) {
        y++;
    } else if (direction === DirectionEnum.left) {
        x--;
    } else if (direction === DirectionEnum.right) {
        x++;
    }
    return room[y]?.[x] === CHEESE_SYMBOL;
}
