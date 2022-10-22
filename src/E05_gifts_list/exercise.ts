export interface GifList {
    [key: string]: number;
}

const transformList = (list: string): string[] => {
    const invalidGiftSymbol = '_';
    return list.toLowerCase()
        .split(' ')
        .filter(gift => !gift.startsWith(invalidGiftSymbol) && gift !== '');
};

export function getGiftList(list: string): GifList {
    const giftList: GifList = {};
    const gifts = transformList(list);
    gifts.forEach((gift: string) => {
        giftList[gift] = giftList[gift] ? giftList[gift] + 1 : 1;
    });
    return giftList;
}
