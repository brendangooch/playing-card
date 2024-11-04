/**
 * test rank returns correct values for every type of playing card
 * 52 cards + jokers
 * values 1 - 13
 */

import * as EXPECT from '@brendangooch/jest-expect';
import { Rank } from './rank.js';
import { type tPlayingCardType } from './index.js';

testAll();
function testAll(): void {
    describe('Rank', () => {
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
    fullTest(1, 'ace', 'an');
    fullTest(2, 'two');
    fullTest(3, 'three');
    fullTest(4, 'four');
    fullTest(5, 'five');
    fullTest(6, 'six', 'a', 'es');
    fullTest(7, 'seven');
    fullTest(8, 'eight', 'an');
    fullTest(9, 'nine');
    fullTest(10, 'ten');
    fullTest(11, 'jack');
    fullTest(12, 'queen');
    fullTest(13, 'king');
}

function testHearts(): void {
    fullTest(14, 'ace', 'an');
    fullTest(15, 'two');
    fullTest(16, 'three');
    fullTest(17, 'four');
    fullTest(18, 'five');
    fullTest(19, 'six', 'a', 'es');
    fullTest(20, 'seven');
    fullTest(21, 'eight', 'an');
    fullTest(22, 'nine');
    fullTest(23, 'ten');
    fullTest(24, 'jack');
    fullTest(25, 'queen');
    fullTest(26, 'king');
}

function testSpades(): void {
    fullTest(27, 'ace', 'an');
    fullTest(28, 'two');
    fullTest(29, 'three');
    fullTest(30, 'four');
    fullTest(31, 'five');
    fullTest(32, 'six', 'a', 'es');
    fullTest(33, 'seven');
    fullTest(34, 'eight', 'an');
    fullTest(35, 'nine');
    fullTest(36, 'ten');
    fullTest(37, 'jack');
    fullTest(38, 'queen');
    fullTest(39, 'king');
}

function testDiamonds(): void {
    fullTest(40, 'ace', 'an');
    fullTest(41, 'two');
    fullTest(42, 'three');
    fullTest(43, 'four');
    fullTest(44, 'five');
    fullTest(45, 'six', 'a', 'es');
    fullTest(46, 'seven');
    fullTest(47, 'eight', 'an');
    fullTest(48, 'nine');
    fullTest(49, 'ten');
    fullTest(50, 'jack');
    fullTest(51, 'queen');
    fullTest(52, 'king');
}


/**
 * 
 * UTILITY FUNCTIONS
 */

function fullTest(type: tPlayingCardType, name: string, article: string = 'a', plural: string = 's'): void {

    const rank = new Rank(type);
    describe(`card type: ${type}`, () => {

        test(`rank name: ${name}`, () => {
            EXPECT.toBe(rank.name, name);
        });

        test(`rank name with definite article (a|an): ${article} ${name}`, () => {
            EXPECT.toBe(rank.nameDefinite, `${article} ${name}`);
        });

        test(`rank name with indefinite article (the): the ${name}`, () => {
            EXPECT.toBe(rank.nameIndefinite, `the ${name}`);
        });

        test(`rank name plural (s|es): ${name}${plural}`, () => {
            EXPECT.toBe(rank.namePlural, `${name}${plural}`);
        });

    });
}