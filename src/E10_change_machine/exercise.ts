const COINS = [1, 2, 5, 10, 20, 50];

export function getChangeInCoins(change: number): number[] {
	const result = Array(6).fill(0);

	let rest = change;
	while (rest > 0) {
		const coin = getMaxCoin(rest);
		result[getCentPosition(coin)] += 1;
		rest -= coin;
	}

	return result;
}

function getMaxCoin(change: number): number {
	let maxCoin = 1;
	for (let i = 0; i < COINS.length; i += 1) {
		if (COINS[i] <= change) {
			maxCoin = COINS[i];
		}
	}
	return maxCoin;
}

function getCentPosition(cents: number): number {
	return COINS.indexOf(cents);
}
