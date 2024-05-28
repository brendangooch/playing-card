/**
 * test rank returns correct values for every type of playing card
 * 52 cards + jokers
 * values 1 - 13
 */

import Suit from "./suit.js";

describe('Suit', () => {
    testAll();
});

function testAll(): void {
    testJoker();
    testClubs();
    testHearts();
    testSpades();
    testDiamonds();
    testInvalidTypeDefaultsToJoker();
}

function testType(type: number, number: number, name: string): void {

    const suit = new Suit(type);
    describe(`type: ${type}`, () => {

        test(`number: ${number}`, () => {
            expect(suit.number).toBe(number);
        });

        test(`name: ${name}`, () => {
            expect(suit.name).toBe(name);
        });

    });

}

function testJoker(): void {
    testType(0, 0, 'joker');
}

function testClubs(): void {
    testType(1, 1, 'club');
    testType(2, 1, 'club');
    testType(3, 1, 'club');
    testType(4, 1, 'club');
    testType(5, 1, 'club');
    testType(6, 1, 'club');
    testType(7, 1, 'club');
    testType(8, 1, 'club');
    testType(9, 1, 'club');
    testType(10, 1, 'club');
    testType(11, 1, 'club');
    testType(12, 1, 'club');
    testType(13, 1, 'club');
}

function testHearts(): void {
    testType(14, 2, 'heart');
    testType(15, 2, 'heart');
    testType(16, 2, 'heart');
    testType(17, 2, 'heart');
    testType(18, 2, 'heart');
    testType(19, 2, 'heart');
    testType(20, 2, 'heart');
    testType(21, 2, 'heart');
    testType(22, 2, 'heart');
    testType(23, 2, 'heart');
    testType(24, 2, 'heart');
    testType(25, 2, 'heart');
    testType(26, 2, 'heart');
}

function testSpades(): void {
    testType(27, 3, 'spade');
    testType(28, 3, 'spade');
    testType(29, 3, 'spade');
    testType(30, 3, 'spade');
    testType(31, 3, 'spade');
    testType(32, 3, 'spade');
    testType(33, 3, 'spade');
    testType(34, 3, 'spade');
    testType(35, 3, 'spade');
    testType(36, 3, 'spade');
    testType(37, 3, 'spade');
    testType(38, 3, 'spade');
    testType(39, 3, 'spade');
}

function testDiamonds(): void {
    testType(40, 4, 'diamond');
    testType(41, 4, 'diamond');
    testType(42, 4, 'diamond');
    testType(43, 4, 'diamond');
    testType(44, 4, 'diamond');
    testType(45, 4, 'diamond');
    testType(46, 4, 'diamond');
    testType(47, 4, 'diamond');
    testType(48, 4, 'diamond');
    testType(49, 4, 'diamond');
    testType(50, 4, 'diamond');
    testType(51, 4, 'diamond');
    testType(52, 4, 'diamond');
}


function testInvalidTypeDefaultsToJoker(): void {
    test('type lower than 0 or higher than 52 defaults to joker', () => {
        const suitA = new Suit(-1);
        const suitB = new Suit(53);
        expect(suitA.number).toBe(0);
        expect(suitB.number).toBe(0);
    });
}