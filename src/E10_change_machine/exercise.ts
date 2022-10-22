const COINS_VALUES = [1, 2, 5, 10, 20, 50];

export function getChangeInCoins(change: number): number[] {
    const changeInCoins = Array(COINS_VALUES.length)
        .fill(0);
    let remainingChange = change;
    let i = COINS_VALUES.length - 1;
    while (remainingChange > 0) {
        if (remainingChange < COINS_VALUES[i]) {
            i -= 1;
        } else {
            remainingChange -= COINS_VALUES[i];
            changeInCoins[i] += 1;
        }
    }
    return changeInCoins;
}
