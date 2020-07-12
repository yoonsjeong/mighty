import Player from "./Player";
import Card from "./Card";

export default class Game {
    deck: Array<Card>;
    players: Array<Player> = []
    
    // turns
    turnOrder: Array<number>;
    turn: number;
    toPlay: number;

    constructor() {
        let deck: Array<Card> = [];
        let players: Array<Player> = []

        // initialize deck
        for (let i = 0; i <= 52; i++) {
            deck.push(new Card(i));
        }
        Game.shuffle(deck);

        // initialize 5 players
        for (let i = 0; i < 5; i++) {
            const player = new Player(i);
            Game.deal(deck, 10, player);
            players.push(player);
        }

        // set
        this.deck = deck;
        this.players = players;
        this.turnOrder = [0, 1, 2, 3, 4];
        this.turn = 0;
        this.toPlay = this.updateToPlay();
    }

    private updateToPlay() {
        this.toPlay = this.turnOrder[this.turn % this.turnOrder.length];
        return this.toPlay;
    }

    private nextTurn() {
        this.turn++;
        this.updateToPlay();
    }


    /**
     * Deals cards to a player.
     * @param deck The deck of cards to deal from.
     * @param cards The number of cards to be dealt. 
     * Must not exceed the number of cards in the deck
     * @param player The player to deal cards to. 
     */
    public static deal(deck: Array<Card>, cards: number, player: Player) {
        if (cards > deck.length) {
            throw new Error("Attempted to deal more cards than in deck.")
        }

        for (let i = 0; i < cards; i++) {
            player.addCard(deck.pop());
        }
    }

    /**
     * Uses [Fisher-Yates Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
     * to shuffle the deck.
     * @param deck The deck to be shuffled.
     */
    public static shuffle(deck: Array<Card>) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = deck[i]
            deck[i] = deck[j]
            deck[j] = temp
        }
    }

    public toString() {
        let out: string = "";
        out += `====== Current Game State ======\n`;
        out += `It is Player ${this.turn}'s Turn.`
        out += `====== Deck ======\n`
        out += Card.cardsToString(this.deck);
        out += `====== Players ======\n`
        out += Player.playersToString(this.players);
        return out;
    }
}