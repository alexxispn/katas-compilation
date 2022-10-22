const normalPrice = 12;
const loyaltyPrice = 250;
const discount = 0.75;
const getNormalPrice = (numOfTickets: number): number => normalPrice * numOfTickets;
const getLoyaltyPrice = (numOfTickets: number): number => {
    let price = loyaltyPrice;
    for (let ticket = 1; ticket <= numOfTickets; ticket += 1) {
        price += normalPrice * discount ** ticket;
    }
    return price;
};

export function shouldBuyLoyaltyCard(numOfTickets: number): boolean {
    return getLoyaltyPrice(numOfTickets) < getNormalPrice(numOfTickets);
}
