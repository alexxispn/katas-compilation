const TICKET_PRICE = 12;
const LOYALTY_CARD_PRICE = 250;
const LOYALTY_CARD_DISCOUNT = 0.75;

export function shouldBuyLoyaltyCard(numOfTickets: number): boolean {
	const totalTicketPrice = numOfTickets * TICKET_PRICE;
	let totalPriceWithLoyaltyCard = LOYALTY_CARD_PRICE;

	for (let index = 1; index <= numOfTickets; index += 1) {
		const totalDiscount = LOYALTY_CARD_DISCOUNT ** index;
		totalPriceWithLoyaltyCard += TICKET_PRICE * totalDiscount;
	}

	return totalPriceWithLoyaltyCard < totalTicketPrice;
}
