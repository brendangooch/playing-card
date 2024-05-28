/**
 * represents the suit of a playing card in a standard deck of cards
 */

export default class Suit {

    // @ts-ignore
    private type: number;

    public constructor(type: number) {
        this.type = (type < 0 || type > 52) ? 0 : type;
    }

    public get number(): number {
        return Math.ceil(this.type / 13);
    }

    public get name(): string {
        switch (this.number) {
            case 1:
                return 'club';
            case 2:
                return 'heart';
            case 3:
                return 'spade';
            case 4:
                return 'diamond';
            default:
                return 'joker';
        }
    }

}