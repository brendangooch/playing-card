/**
 * get the playing card rank from the playing card type
 */

import { type tPlayingCardType } from "./index.js";

export function getRankFromType(type: tPlayingCardType): number {
    return (type === 0) ? 0 : (type % 13 === 0) ? 13 : type % 13;
}