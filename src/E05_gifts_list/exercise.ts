export interface GifList {
    [key: string]: number;
}

const transformList = (list: string): string[] => {
    const CROSS = '_';
    const gifts = list.split(' ');
    const giftsWithoutCross = gifts.filter(gift => !gift.startsWith(CROSS));
    const giftsWithoutCrossAndSpaces = giftsWithoutCross.filter(gift => gift !== '');
    return giftsWithoutCrossAndSpaces.map(gift => gift.toLowerCase());
};

export function getGiftList(list: string): GifList {
    const gifts = transformList(list);
    const giftList: GifList = {};
    gifts.forEach(gift => {
        if (giftList[gift]) {
            giftList[gift] += 1;
        } else {
            giftList[gift] = 1;
        }
    });
    return giftList;
}
