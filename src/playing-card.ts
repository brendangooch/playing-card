/**
 * 
 */

import { type tPlayingCardType } from "./index.js";
import { Rank } from "./rank.js";
import { Suit } from "./suit.js";

export class PlayingCard {

    private _type: tPlayingCardType;
    private _rank: Rank;
    private _suit: Suit;

    public constructor(type: tPlayingCardType) {
        this._type = type;
        this._rank = new Rank(this._type);
        this._suit = new Suit(this._type);
    }

    public get type(): tPlayingCardType {
        return this._type;
    }

    public get rank(): Rank {
        return this._rank;
    }

    public get suit(): Suit {
        return this._suit;
    }

    // {rank} of {suit}s
    public get name(): string {
        if (this.isJoker) return 'joker';
        return `${this.rank.name} of ${this.suit.name}s`;
    }

    // a | an ...
    public get nameDefinite(): string {
        if (this.isJoker) return 'a joker';
        return `${this.rank.nameDefinite} of ${this.suit.name}s`;
    }

    // the ...
    public get nameIndefinite(): string {
        if (this.isJoker) return 'the joker';
        return `${this.rank.nameIndefinite} of ${this.suit.name}s`;
    }

    // {rank}s of {suit}s
    public get namePlural(): string {
        if (this.isJoker) return 'jokers';
        return `${this.rank.namePlural} of ${this.suit.name}s`;
    }

    public get isJoker(): boolean {
        return this._type === 0;
    }

    public clone(): PlayingCard {
        return new PlayingCard(this._type);
    }

    public isRankNumber(rank: number): boolean {
        return this.rank.number === rank;
    }

    public isSuitNumber(suit: number): boolean {
        return this.suit.number === suit;
    }

    // the value between this card's rank and the other card's rank
    public valueBetweenRanks(other: PlayingCard): number {
        if (this.isJoker || other.isJoker) return -1;
        return Math.abs(this.rank.number - other.rank.number);
    }

    public isSameCardAs(other: PlayingCard): boolean {
        return (this.isJoker && other.isJoker) || (this.hasSameRankAs(other) && this.hasSameSuitAs(other));
    }

    public hasSameRankAs(other: PlayingCard): boolean {
        return this.rank.number === other.rank.number;
    }

    public hasHigherRankThan(other: PlayingCard): boolean {
        if (this.isJoker || other.isJoker) return false;
        return this.rank.number > other.rank.number;
    }

    public hasLowerRankThan(other: PlayingCard): boolean {
        if (this.isJoker || other.isJoker) return false;
        return this.rank.number < other.rank.number;
    }

    public hasSameSuitAs(other: PlayingCard): boolean {
        return this.suit.number === other.suit.number;
    }

    public hasHigherSuitThan(other: PlayingCard): boolean {
        if (this.isJoker || other.isJoker) return false;
        return this.suit.number > other.suit.number;
    }

    public hasLowerSuitThan(other: PlayingCard): boolean {
        if (this.isJoker || other.isJoker) return false;
        return this.suit.number < other.suit.number;
    }

    // a joker has highest value, then ordered by rank, then by suit (for deterministic sorting)
    public isHigherThan(other: PlayingCard): boolean {
        if (this.isJoker) return true;
        if (other.isJoker) return false;
        if (this.hasHigherRankThan(other)) return true;
        if (this.hasSameRankAs(other) && this.hasHigherSuitThan(other)) return true;
        return false;
    }

}