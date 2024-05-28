/**
 * represents the rank/value/number of a playing card in a standard deck of cards
 */

export default class Rank {

    // @ts-ignore
    private type: number;

    public constructor(type: number) {
        this.type = (type < 0 || type > 52) ? 0 : type;
    }

    public get number(): number {
        return (this.type === 0) ? 0 : (this.type % 13 === 0) ? 13 : this.type % 13;
    }

    public get name(): string {
        switch (this.number) {
            case 1:
                return 'ace';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 10:
                return 'ten';
            case 11:
                return 'jack';
            case 12:
                return 'queen';
            case 13:
                return 'king';
            default:
                return 'joker';
        }
    }

    public get nameDefinite(): string {
        return `${this.definiteArticle} ${this.name}`;
    }

    public get nameIndefinite(): string {
        return `the ${this.name}`;
    }

    public get namePlural(): string {
        return `${this.name}${this.pluralEnding}`;
    }

    private get definiteArticle(): string {
        return (this.number === 1 || this.number === 8) ? 'an' : 'a';
    }

    private get pluralEnding(): string {
        return (this.number === 6) ? 'es' : 's';
    }

}