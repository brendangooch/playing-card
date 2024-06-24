/**
 * 
 */

import Rank from "./rank.js";
import Suit from "./suit.js";

export default class PlayingCard {

    private t: number;
    private r: Rank;
    private s: Suit;

    public constructor(type: number) {
        this.t = (type < 0 || type > 52) ? 0 : type;
        this.r = new Rank(this.t);
        this.s = new Suit(this.t);
    }

    public get type(): number {
        return this.t;
    }

    public get rank(): Rank {
        return this.r;
    }

    public get suit(): Suit {
        return this.s;
    }

    public get name(): string {
        if (this.isJoker()) return 'joker';
        return `${this.rank.name} of ${this.suit.name}s`;
    }

    // a | an ...
    public get nameDefinite(): string {
        if (this.isJoker()) return 'a joker';
        return `${this.rank.nameDefinite} of ${this.suit.name}s`;
    }

    // the ...
    public get nameIndefinite(): string {
        if (this.isJoker()) return 'the joker';
        return `${this.rank.nameIndefinite} of ${this.suit.name}s`;
    }

    // {rank}s of {suit}s
    public get namePlural(): string {
        if (this.isJoker()) return 'jokers';
        return `${this.rank.namePlural} of ${this.suit.name}s`;
    }

    public isJoker(): boolean {
        return this.t === 0;
    }

    public clone(): PlayingCard {
        return new PlayingCard(this.t);
    }

    public isRank(rank: number): boolean {
        return this.rank.number === rank;
    }

    public isSuit(suit: number): boolean {
        return this.suit.number === suit;
    }

    // the value between this card's rank and the other card's rank
    public valueBetween(other: PlayingCard): number {
        if (this.isJoker() || other.isJoker()) return -1;
        return Math.abs(this.rank.number - other.rank.number);
    }

    public isSameCard(other: PlayingCard): boolean {
        return this.rank.number === other.rank.number && this.suit.number === other.suit.number;
    }

    public hasSameRankAs(other: PlayingCard): boolean {
        return this.rank.number === other.rank.number;
    }

    public hasHigherRankThan(other: PlayingCard): boolean {
        if (this.isJoker() || other.isJoker()) return false;
        return this.rank.number > other.rank.number;
    }

    public hasLowerRankThan(other: PlayingCard): boolean {
        if (this.isJoker() || other.isJoker()) return false;
        return this.rank.number < other.rank.number;
    }

    public hasSameSuitAs(other: PlayingCard): boolean {
        return this.suit.number === other.suit.number;
    }

    public hasHigherSuitThan(other: PlayingCard): boolean {
        if (this.isJoker() || other.isJoker()) return false;
        return this.suit.number > other.suit.number;
    }

    public hasLowerSuitThan(other: PlayingCard): boolean {
        if (this.isJoker() || other.isJoker()) return false;
        return this.suit.number < other.suit.number;
    }

    // a joker ranks highest, then a greater value, then a higher suit
    public isHigherThan(other: PlayingCard): boolean {
        if (this.isJoker()) return true;
        if (other.isJoker()) return false;
        if (this.hasHigherRankThan(other)) return true;
        if (this.hasHigherSuitThan(other)) return true;
        return false;
    }

}