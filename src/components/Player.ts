import Card from "./Card";

export default class Player {
    id: number;
    hand: Array<Card>;
    constructor(id: number) {
        this.id = id;
        this.hand = [];
    }

    public addCard(card: Card) {
        this.hand.push(card);
    }

    public handToString() {
        let out: string = "";
        for (let i = 0; i < this.hand.length; i++) {
            out += this.hand[i].toString() + "\n";
        }
        return out;
    }

    public toString() {
        let out: string = "";
        out += `Player ID ${this.id}:\n`
        out += `Current hand contains\n`
        out += Card.cardsToString(this.hand);
        return out;
    }

    public static playersToString(players: Array<Player>) {
        let out: string = "";
        for (let i = 0; i < players.length; i++) {
            out += players[i].toString() + "\n";
        }
        return out;
    }
}