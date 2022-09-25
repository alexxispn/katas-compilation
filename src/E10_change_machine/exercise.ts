export function getChangeInCoins(change: number): number[] {
    const changeInCoins = [0, 0, 0, 0, 0, 0];
    const coinValues = [1, 2, 5, 10, 20, 50];
    let remainingChange = change;
    let i = 5;
    while (remainingChange > 0) {
        if (remainingChange >= coinValues[i]) {
            remainingChange -= coinValues[i];
            changeInCoins[i]++;
        } else {
            i--;
        }
    }
    return changeInCoins;
}
