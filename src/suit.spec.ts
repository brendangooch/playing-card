/**
 * test suit returns correct suit values for every type of playing card
 * 52 cards + joker
 * 4 suits
 */

import * as EXPECT from '@brendangooch/jest-expect';
import { Suit } from "./suit.js";
import { type tPlayingCardType } from './index.js';

testAll();
function testAll(): void {
    describe('Suit', () => {
        testJoker();
        testClubs();
        testHearts();
        testSpades();
        testDiamonds();

    });
}

function testJoker(): void {
    fullTest(0, 'joker');
}

function testClubs(): void {
    fullTest(1, 'club');
    fullTest(2, 'club');
    fullTest(3, 'club');
    fullTest(4, 'club');
    fullTest(5, 'club');
    fullTest(6, 'club');
    fullTest(7, 'club');
    fullTest(8, 'club');
    fullTest(9, 'club');
    fullTest(10, 'club');
    fullTest(11, 'club');
    fullTest(12, 'club');
    fullTest(13, 'club');
}

function testHearts(): void {
    fullTest(14, 'heart');
    fullTest(15, 'heart');
    fullTest(16, 'heart');
    fullTest(17, 'heart');
    fullTest(18, 'heart');
    fullTest(19, 'heart');
    fullTest(20, 'heart');
    fullTest(21, 'heart');
    fullTest(22, 'heart');
    fullTest(23, 'heart');
    fullTest(24, 'heart');
    fullTest(25, 'heart');
    fullTest(26, 'heart');
}

function testSpades(): void {
    fullTest(27, 'spade');
    fullTest(28, 'spade');
    fullTest(29, 'spade');
    fullTest(30, 'spade');
    fullTest(31, 'spade');
    fullTest(32, 'spade');
    fullTest(33, 'spade');
    fullTest(34, 'spade');
    fullTest(35, 'spade');
    fullTest(36, 'spade');
    fullTest(37, 'spade');
    fullTest(38, 'spade');
    fullTest(39, 'spade');
}

function testDiamonds(): void {
    fullTest(40, 'diamond');
    fullTest(41, 'diamond');
    fullTest(42, 'diamond');
    fullTest(43, 'diamond');
    fullTest(44, 'diamond');
    fullTest(45, 'diamond');
    fullTest(46, 'diamond');
    fullTest(47, 'diamond');
    fullTest(48, 'diamond');
    fullTest(49, 'diamond');
    fullTest(50, 'diamond');
    fullTest(51, 'diamond');
    fullTest(52, 'diamond');
}

/**
 * UTILITY FUNCTIONS
 */

function fullTest(type: tPlayingCardType, name: string): void {

    const suit = new Suit(type);
    describe(`card type: ${type}`, () => {

        test(`suit name: ${name}`, () => {
            EXPECT.toBe(suit.name, name);
        });

    });

}