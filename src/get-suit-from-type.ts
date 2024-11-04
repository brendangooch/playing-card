/**
 * get the playing card suit from the playing card type
 */

import { type tPlayingCardType } from "./index.js";

export function getSuitFromType(type: tPlayingCardType): number {
    return Math.ceil(type / 13);
}