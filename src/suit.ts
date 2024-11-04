/**
 * represents the suit of a playing card in a standard deck of cards
 */

import { type tPlayingCardType } from "./index.js";
import { getSuitFromType } from "./get-suit-from-type.js";

export class Suit {

    private type: tPlayingCardType;

    public constructor(type: tPlayingCardType) {
        this.type = type;
    }

    public get number(): number {
        return getSuitFromType(this.type);
    }

    public get name(): string {
        switch (this.number) {
            case 0:
                return 'joker';
            case 1:
                return 'club';
            case 2:
                return 'heart';
            case 3:
                return 'spade';
            case 4:
                return 'diamond';
        }
        return 'undefined';
    }

}