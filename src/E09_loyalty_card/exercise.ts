const normalPrice = 12;
const loyaltyPrice = 250;
const discount = 0.75;
const getNormalPrice = (numOfTickets: number): number => normalPrice * numOfTickets;
const getLoyaltyPrice = (numOfTickets: number): number => {
    let price = loyaltyPrice;
    for (let i = 0; i < numOfTickets; i++) {
        price += normalPrice * discount ** i;
    }
    return price;
};

export function shouldBuyLoyaltyCard(numOfTickets: number): boolean {
    if (numOfTickets < 1) return false;
    const finalNormalPrice = getNormalPrice(numOfTickets);
    const finalLoyaltyPrice = getLoyaltyPrice(numOfTickets);
    return finalNormalPrice > finalLoyaltyPrice;
}
