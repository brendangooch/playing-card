/**
 * test rank returns correct values for every type of playing card
 * 52 cards + jokers
 * values 1 - 13
 */

import Rank from "./rank.js";

describe('Rank', () => {
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

function testType(type: number, number: number, name: string, indefinite: string, definite: string, plural: string): void {

    const rank = new Rank(type);
    describe(`type: ${type}`, () => {

        test(`number: ${number}`, () => {
            expect(rank.number).toBe(number);
        });

        test(`name: ${name}`, () => {
            expect(rank.name).toBe(name);
        });

        test(`name with definite article: ${definite}`, () => {
            expect(rank.nameDefinite).toBe(definite);
        });

        test(`name with indefinite article: ${indefinite}`, () => {
            expect(rank.nameIndefinite).toBe(indefinite);
        });

        test(`plural name: ${plural}`, () => {
            expect(rank.namePlural).toBe(plural);
        });

    });

}

function testJoker(): void {
    testType(0, 0, 'joker', 'the joker', 'a joker', 'jokers');
}

function testClubs(): void {
    testType(1, 1, 'ace', 'the ace', 'an ace', 'aces');
    testType(2, 2, 'two', 'the two', 'a two', 'twos');
    testType(3, 3, 'three', 'the three', 'a three', 'threes');
    testType(4, 4, 'four', 'the four', 'a four', 'fours');
    testType(5, 5, 'five', 'the five', 'a five', 'fives');
    testType(6, 6, 'six', 'the six', 'a six', 'sixes');
    testType(7, 7, 'seven', 'the seven', 'a seven', 'sevens');
    testType(8, 8, 'eight', 'the eight', 'an eight', 'eights');
    testType(9, 9, 'nine', 'the nine', 'a nine', 'nines');
    testType(10, 10, 'ten', 'the ten', 'a ten', 'tens');
    testType(11, 11, 'jack', 'the jack', 'a jack', 'jacks');
    testType(12, 12, 'queen', 'the queen', 'a queen', 'queens');
    testType(13, 13, 'king', 'the king', 'a king', 'kings');
}

function testHearts(): void {
    testType(14, 1, 'ace', 'the ace', 'an ace', 'aces');
    testType(15, 2, 'two', 'the two', 'a two', 'twos');
    testType(16, 3, 'three', 'the three', 'a three', 'threes');
    testType(17, 4, 'four', 'the four', 'a four', 'fours');
    testType(18, 5, 'five', 'the five', 'a five', 'fives');
    testType(19, 6, 'six', 'the six', 'a six', 'sixes');
    testType(20, 7, 'seven', 'the seven', 'a seven', 'sevens');
    testType(21, 8, 'eight', 'the eight', 'an eight', 'eights');
    testType(22, 9, 'nine', 'the nine', 'a nine', 'nines');
    testType(23, 10, 'ten', 'the ten', 'a ten', 'tens');
    testType(24, 11, 'jack', 'the jack', 'a jack', 'jacks');
    testType(25, 12, 'queen', 'the queen', 'a queen', 'queens');
    testType(26, 13, 'king', 'the king', 'a king', 'kings');
}

function testSpades(): void {
    testType(27, 1, 'ace', 'the ace', 'an ace', 'aces');
    testType(28, 2, 'two', 'the two', 'a two', 'twos');
    testType(29, 3, 'three', 'the three', 'a three', 'threes');
    testType(30, 4, 'four', 'the four', 'a four', 'fours');
    testType(31, 5, 'five', 'the five', 'a five', 'fives');
    testType(32, 6, 'six', 'the six', 'a six', 'sixes');
    testType(33, 7, 'seven', 'the seven', 'a seven', 'sevens');
    testType(34, 8, 'eight', 'the eight', 'an eight', 'eights');
    testType(35, 9, 'nine', 'the nine', 'a nine', 'nines');
    testType(36, 10, 'ten', 'the ten', 'a ten', 'tens');
    testType(37, 11, 'jack', 'the jack', 'a jack', 'jacks');
    testType(38, 12, 'queen', 'the queen', 'a queen', 'queens');
    testType(39, 13, 'king', 'the king', 'a king', 'kings');
}

function testDiamonds(): void {
    testType(40, 1, 'ace', 'the ace', 'an ace', 'aces');
    testType(41, 2, 'two', 'the two', 'a two', 'twos');
    testType(42, 3, 'three', 'the three', 'a three', 'threes');
    testType(43, 4, 'four', 'the four', 'a four', 'fours');
    testType(44, 5, 'five', 'the five', 'a five', 'fives');
    testType(45, 6, 'six', 'the six', 'a six', 'sixes');
    testType(46, 7, 'seven', 'the seven', 'a seven', 'sevens');
    testType(47, 8, 'eight', 'the eight', 'an eight', 'eights');
    testType(48, 9, 'nine', 'the nine', 'a nine', 'nines');
    testType(49, 10, 'ten', 'the ten', 'a ten', 'tens');
    testType(50, 11, 'jack', 'the jack', 'a jack', 'jacks');
    testType(51, 12, 'queen', 'the queen', 'a queen', 'queens');
    testType(52, 13, 'king', 'the king', 'a king', 'kings');
}


function testInvalidTypeDefaultsToJoker(): void {
    test('type lower than 0 or higher than 52 defaults to joker', () => {
        const rankA = new Rank(-1);
        const rankB = new Rank(53);
        expect(rankA.number).toBe(0);
        expect(rankB.number).toBe(0);
    });
}