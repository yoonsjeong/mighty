import { Suit, Value } from "./types";

export default class Card {
    id: number;
    suit: Suit;
    value: Value;

    constructor(id: number) {
        this.id = id;
        this.suit = Card.toSuit(id);
        this.value = Card.toValue(id);
    }

    public static toSuit(id: number) {
        if (id == 52) return Suit.JOKER;
        return Math.floor(id / 13) as Suit;
    }

    public static toValue(id: number) {
        if (id == 52) return Value.JOKER;
        return id % 13 as Value;
    }

    
    public toString() {
        let out: string = "";
        out += `Card id: ${this.id}, `
        out += `${Value[this.value]} of ${Suit[this.suit]}.`
        return out;
    }

    public static cardsToString(cards: Array<Card>) {
        let out: string = "";
        for (let i = 0; i < cards.length; i++) {
            out += `[${i}] ` + cards[i].toString() + "\n";
        }
        return out;
    }
}