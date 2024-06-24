/**
 * 
 */

import PlayingCard from "./playing-card.js";

describe('PlayingCard', () => {
    testAll();
});

function testAll(): void {
    testAllTypes();
    testClone();
    testValueBetween();
    testIsSameCard();
    testHasSameRankAs();
    testHasHigherRankThan();
    testHasLowerRankThan();
    testHasSameSuitAs();
    testHasHigherSuitThan();
    testHasLowerSuitThan();
    testIsHigherThan();
}

function testType(type: number, name: string, definite: string, indefinite: string, plural: string, isJoker: boolean): void {
    const card = new PlayingCard(type);
    describe(`testing type: ${type}`, () => {
        testGetType(card, type);
        testGetName(card, name);
        testGetNameDefinite(card, definite);
        testGetNameIndefinite(card, indefinite);
        testGetNamePlural(card, plural);
        testIsJoker(card, isJoker);
        testIsRank(card);
        testIsSuit(card);
    });
}

function testGetType(card: PlayingCard, type: number): void {
    test(`type: ${type}`, () => {
        expect(card.type).toBe(type);
    });
}

function testGetName(card: PlayingCard, name: string): void {
    test(`name: ${name}`, () => {
        expect(card.name).toBe(name);
    });
}

function testGetNameDefinite(card: PlayingCard, definite: string): void {
    test(`name with definite article: ${definite}`, () => {
        expect(card.nameDefinite).toBe(definite);
    });
}

function testGetNameIndefinite(card: PlayingCard, indefinite: string): void {
    test(`name with indefinite article: ${indefinite}`, () => {
        expect(card.nameIndefinite).toBe(indefinite);
    });
}

function testGetNamePlural(card: PlayingCard, plural: string): void {
    test(`name plural: ${plural}`, () => {
        expect(card.namePlural).toBe(plural);
    });
}

function testIsJoker(card: PlayingCard, isJoker: boolean): void {
    test(`isJoker(): ${isJoker}`, () => {
        expect(card.isJoker()).toBe(isJoker);
    });
}

function testIsRank(card: PlayingCard): void {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].forEach((i) => {
        test(`isRank(${i}): ${i === card.rank.number}`, () => {
            if (i === card.rank.number) expect(card.isRank(i)).toBeTruthy();
            else expect(card.isRank(i)).not.toBeTruthy();
        });
    });
}

function testIsSuit(card: PlayingCard): void {
    [1, 2, 3, 4].forEach((i) => {
        test(`isSuit(${i}): ${i === card.suit.number}`, () => {
            if (i === card.suit.number) expect(card.isSuit(i)).toBeTruthy();
            else expect(card.isSuit(i)).not.toBeTruthy();
        });
    });
}


function testAllTypes(): void {
    testInvalidTypes();
    testJoker();
    testClubs();
    testHearts();
    testSpades();
    testDiamonds();
}

function testInvalidTypes(): void {
    describe('invalid types > 52 || < 0 default to a joker', () => {

        test('type: -1 defaults to joker', () => {
            const card = new PlayingCard(-1);
            expect(card.isJoker()).toBeTruthy();
        });

        test('type: 53 defaults to joker', () => {
            const card = new PlayingCard(53);
            expect(card.isJoker()).toBeTruthy();
        });

    });
}

function testJoker(): void {
    testType(0, 'joker', 'a joker', 'the joker', 'jokers', true);
}

function testClubs(): void {
    testType(1, 'ace of clubs', 'an ace of clubs', 'the ace of clubs', 'aces of clubs', false);
    testType(2, 'two of clubs', 'a two of clubs', 'the two of clubs', 'twos of clubs', false);
    testType(3, 'three of clubs', 'a three of clubs', 'the three of clubs', 'threes of clubs', false);
    testType(4, 'four of clubs', 'a four of clubs', 'the four of clubs', 'fours of clubs', false);
    testType(5, 'five of clubs', 'a five of clubs', 'the five of clubs', 'fives of clubs', false);
    testType(6, 'six of clubs', 'a six of clubs', 'the six of clubs', 'sixes of clubs', false);
    testType(7, 'seven of clubs', 'a seven of clubs', 'the seven of clubs', 'sevens of clubs', false);
    testType(8, 'eight of clubs', 'an eight of clubs', 'the eight of clubs', 'eights of clubs', false);
    testType(9, 'nine of clubs', 'a nine of clubs', 'the nine of clubs', 'nines of clubs', false);
    testType(10, 'ten of clubs', 'a ten of clubs', 'the ten of clubs', 'tens of clubs', false);
    testType(11, 'jack of clubs', 'a jack of clubs', 'the jack of clubs', 'jacks of clubs', false);
    testType(12, 'queen of clubs', 'a queen of clubs', 'the queen of clubs', 'queens of clubs', false);
    testType(13, 'king of clubs', 'a king of clubs', 'the king of clubs', 'kings of clubs', false);
}

function testHearts(): void {
    testType(14, 'ace of hearts', 'an ace of hearts', 'the ace of hearts', 'aces of hearts', false);
    testType(15, 'two of hearts', 'a two of hearts', 'the two of hearts', 'twos of hearts', false);
    testType(16, 'three of hearts', 'a three of hearts', 'the three of hearts', 'threes of hearts', false);
    testType(17, 'four of hearts', 'a four of hearts', 'the four of hearts', 'fours of hearts', false);
    testType(18, 'five of hearts', 'a five of hearts', 'the five of hearts', 'fives of hearts', false);
    testType(19, 'six of hearts', 'a six of hearts', 'the six of hearts', 'sixes of hearts', false);
    testType(20, 'seven of hearts', 'a seven of hearts', 'the seven of hearts', 'sevens of hearts', false);
    testType(21, 'eight of hearts', 'an eight of hearts', 'the eight of hearts', 'eights of hearts', false);
    testType(22, 'nine of hearts', 'a nine of hearts', 'the nine of hearts', 'nines of hearts', false);
    testType(23, 'ten of hearts', 'a ten of hearts', 'the ten of hearts', 'tens of hearts', false);
    testType(24, 'jack of hearts', 'a jack of hearts', 'the jack of hearts', 'jacks of hearts', false);
    testType(25, 'queen of hearts', 'a queen of hearts', 'the queen of hearts', 'queens of hearts', false);
    testType(26, 'king of hearts', 'a king of hearts', 'the king of hearts', 'kings of hearts', false);
}

function testSpades(): void {
    testType(27, 'ace of spades', 'an ace of spades', 'the ace of spades', 'aces of spades', false);
    testType(28, 'two of spades', 'a two of spades', 'the two of spades', 'twos of spades', false);
    testType(29, 'three of spades', 'a three of spades', 'the three of spades', 'threes of spades', false);
    testType(30, 'four of spades', 'a four of spades', 'the four of spades', 'fours of spades', false);
    testType(31, 'five of spades', 'a five of spades', 'the five of spades', 'fives of spades', false);
    testType(32, 'six of spades', 'a six of spades', 'the six of spades', 'sixes of spades', false);
    testType(33, 'seven of spades', 'a seven of spades', 'the seven of spades', 'sevens of spades', false);
    testType(34, 'eight of spades', 'an eight of spades', 'the eight of spades', 'eights of spades', false);
    testType(35, 'nine of spades', 'a nine of spades', 'the nine of spades', 'nines of spades', false);
    testType(36, 'ten of spades', 'a ten of spades', 'the ten of spades', 'tens of spades', false);
    testType(37, 'jack of spades', 'a jack of spades', 'the jack of spades', 'jacks of spades', false);
    testType(38, 'queen of spades', 'a queen of spades', 'the queen of spades', 'queens of spades', false);
    testType(39, 'king of spades', 'a king of spades', 'the king of spades', 'kings of spades', false);
}

function testDiamonds(): void {
    testType(40, 'ace of diamonds', 'an ace of diamonds', 'the ace of diamonds', 'aces of diamonds', false);
    testType(41, 'two of diamonds', 'a two of diamonds', 'the two of diamonds', 'twos of diamonds', false);
    testType(42, 'three of diamonds', 'a three of diamonds', 'the three of diamonds', 'threes of diamonds', false);
    testType(43, 'four of diamonds', 'a four of diamonds', 'the four of diamonds', 'fours of diamonds', false);
    testType(44, 'five of diamonds', 'a five of diamonds', 'the five of diamonds', 'fives of diamonds', false);
    testType(45, 'six of diamonds', 'a six of diamonds', 'the six of diamonds', 'sixes of diamonds', false);
    testType(46, 'seven of diamonds', 'a seven of diamonds', 'the seven of diamonds', 'sevens of diamonds', false);
    testType(47, 'eight of diamonds', 'an eight of diamonds', 'the eight of diamonds', 'eights of diamonds', false);
    testType(48, 'nine of diamonds', 'a nine of diamonds', 'the nine of diamonds', 'nines of diamonds', false);
    testType(49, 'ten of diamonds', 'a ten of diamonds', 'the ten of diamonds', 'tens of diamonds', false);
    testType(50, 'jack of diamonds', 'a jack of diamonds', 'the jack of diamonds', 'jacks of diamonds', false);
    testType(51, 'queen of diamonds', 'a queen of diamonds', 'the queen of diamonds', 'queens of diamonds', false);
    testType(52, 'king of diamonds', 'a king of diamonds', 'the king of diamonds', 'kings of diamonds', false);
}


function testClone(): void {
    describe('clone()', () => {

        test('cloned card has same rank and suit as original', () => {
            for (let type = 0; type <= 52; type++) {
                const original = new PlayingCard(type);
                const clone = original.clone();
                expect(original.rank.number).toBe(clone.rank.number);
                expect(original.suit.number).toBe(clone.suit.number);
            }
        });

        test('cloned card is NOT the same object as the original', () => {
            for (let type = 0; type <= 52; type++) {
                const original = new PlayingCard(type);
                const notCloned = original;
                const clone = original.clone();
                expect(original === notCloned).toBeTruthy();
                expect(original === clone).not.toBeTruthy();
            }
        });

    });
}

function testValueBetween(): void {

    describe('valueBetween()', () => {

        test('returns -1 if either card is a joker', () => {
            const joker = new PlayingCard(0);
            for (let t = 0; t <= 52; t++) {
                const other = new PlayingCard(52);
                expect(joker.valueBetween(other)).toBe(-1);
                expect(other.valueBetween(joker)).toBe(-1);
            }
        });

        test('ace is LOW', () => {
            const aceOfClubs = new PlayingCard(1);
            const twoOfClubs = new PlayingCard(2);
            const kingOfClubs = new PlayingCard(13);
            expect(aceOfClubs.valueBetween(twoOfClubs)).toBe(1);
            expect(twoOfClubs.valueBetween(aceOfClubs)).toBe(1);
            expect(aceOfClubs.valueBetween(kingOfClubs)).toBe(12);
            expect(kingOfClubs.valueBetween(aceOfClubs)).toBe(12);
        });

        test('returns the absolute value (value >= 0) between the 2 card ranks', () => {
            for (let v1 = 1; v1 <= 13; v1++) {
                for (let v2 = 1; v2 <= 13; v2++) {
                    const card1 = new PlayingCard(v1);
                    const card2 = new PlayingCard(v2);
                    expect(card1.valueBetween(card2) >= 0).toBeTruthy();
                    expect(card2.valueBetween(card1) >= 0).toBeTruthy();
                }
            }
        });

        test('returns correct value between every possible combination of values (1 - 13)', () => {
            for (let v1 = 1; v1 <= 13; v1++) {
                for (let v2 = 1; v2 <= 13; v2++) {
                    const card1 = new PlayingCard(v1);
                    const card2 = new PlayingCard(v2);
                    expect(card1.valueBetween(card2)).toBe(Math.abs(v1 - v2));
                    expect(card2.valueBetween(card1)).toBe(Math.abs(v1 - v2));
                }
            }
        });

    });

}

function testIsSameCard(): void {

    describe('isSameCard()', () => {

        test('cards of every type match with each other', () => {
            for (let t = 0; t <= 52; t++) {
                const cardA = new PlayingCard(t);
                const cardB = new PlayingCard(t);
                expect(cardA.isSameCard(cardB)).toBeTruthy();
                expect(cardB.isSameCard(cardA)).toBeTruthy();
            }
        });

        test('matches ONLY identical cards and no others', () => {
            for (let t1 = 0; t1 <= 52; t1++) {
                for (let t2 = 0; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.rank.number === cardB.rank.number && cardA.suit.number === cardB.suit.number) {
                        expect(cardA.isSameCard(cardB)).toBeTruthy();
                        expect(cardB.isSameCard(cardA)).toBeTruthy();
                    }
                    else {
                        expect(cardA.isSameCard(cardB)).not.toBeTruthy();
                        expect(cardB.isSameCard(cardA)).not.toBeTruthy();
                    }
                }
            }
        });

    });

}

function testHasSameRankAs(): void {

    describe('hasSameRankAs()', () => {

        test('matches ONLY cards with the same rank and no others', () => {
            for (let t1 = 0; t1 <= 52; t1++) {
                for (let t2 = 0; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.rank.number === cardB.rank.number) {
                        expect(cardA.hasSameRankAs(cardB)).toBeTruthy();
                        expect(cardB.hasSameRankAs(cardA)).toBeTruthy();
                    }
                    else {
                        expect(cardA.hasSameRankAs(cardB)).not.toBeTruthy();
                        expect(cardB.hasSameRankAs(cardA)).not.toBeTruthy();
                    }
                }
            }
        });

    });

}

function testHasHigherRankThan(): void {

    describe('hasHigherRankThan()', () => {

        test('if either card is a joker, returns false', () => {
            const joker = new PlayingCard(0);
            for (let t = 0; t <= 52; t++) {
                const other = new PlayingCard(t);
                expect(joker.hasHigherRankThan(other)).toBeFalsy();
                expect(other.hasHigherRankThan(joker)).toBeFalsy();
            }
        });

        test('ace is LOW', () => {
            const aceOfDiamonds = new PlayingCard(40);
            const twoOfDiamonds = new PlayingCard(41);
            const kingOfDiamonds = new PlayingCard(52);
            expect(aceOfDiamonds.hasHigherRankThan(twoOfDiamonds)).not.toBeTruthy();
            expect(twoOfDiamonds.hasHigherRankThan(aceOfDiamonds)).toBeTruthy();
            expect(aceOfDiamonds.hasHigherRankThan(kingOfDiamonds)).not.toBeTruthy();
            expect(kingOfDiamonds.hasHigherRankThan(aceOfDiamonds)).toBeTruthy();
        });

        test('matches ONLY against cards with a lower rank', () => {
            for (let t1 = 1; t1 <= 52; t1++) {
                for (let t2 = 1; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.rank.number > cardB.rank.number) {
                        expect(cardA.hasHigherRankThan(cardB)).toBeTruthy();
                        expect(cardB.hasHigherRankThan(cardA)).not.toBeTruthy();
                    }
                    else if (cardA.rank.number < cardB.rank.number) {
                        expect(cardA.hasHigherRankThan(cardB)).not.toBeTruthy();
                        expect(cardB.hasHigherRankThan(cardA)).toBeTruthy();
                    }
                }
            }
        });

    });

}

function testHasLowerRankThan(): void {

    describe('hasLowerRankThan()', () => {

        test('if either card is a joker, returns false', () => {
            const joker = new PlayingCard(0);
            for (let t = 0; t <= 52; t++) {
                const other = new PlayingCard(t);
                expect(joker.hasLowerRankThan(other)).toBeFalsy();
                expect(other.hasLowerRankThan(joker)).toBeFalsy();
            }
        });

        test('ace is LOW', () => {
            const aceOfDiamonds = new PlayingCard(40);
            const twoOfDiamonds = new PlayingCard(41);
            const kingOfDiamonds = new PlayingCard(52);
            expect(aceOfDiamonds.hasLowerRankThan(twoOfDiamonds)).toBeTruthy();
            expect(twoOfDiamonds.hasLowerRankThan(aceOfDiamonds)).not.toBeTruthy();
            expect(aceOfDiamonds.hasLowerRankThan(kingOfDiamonds)).toBeTruthy();
            expect(kingOfDiamonds.hasLowerRankThan(aceOfDiamonds)).not.toBeTruthy();
        });

        test('matches ONLY against cards with a higher rank', () => {
            for (let t1 = 1; t1 <= 52; t1++) {
                for (let t2 = 1; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.rank.number < cardB.rank.number) {
                        expect(cardA.hasLowerRankThan(cardB)).toBeTruthy();
                        expect(cardB.hasLowerRankThan(cardA)).not.toBeTruthy();
                    }
                    else if (cardA.rank.number > cardB.rank.number) {
                        expect(cardA.hasLowerRankThan(cardB)).not.toBeTruthy();
                        expect(cardB.hasLowerRankThan(cardA)).toBeTruthy();
                    }
                }
            }
        });

    });

}

// hasSameSuitAs(other: PlayingCard): boolean
function testHasSameSuitAs(): void {
    describe('hasSameSuitAs()', () => {
        test('matches ONLY cards with the same suit and no others', () => {
            for (let t1 = 0; t1 <= 52; t1++) {
                for (let t2 = 0; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.suit.number === cardB.suit.number) {
                        expect(cardA.hasSameSuitAs(cardB)).toBeTruthy();
                        expect(cardB.hasSameSuitAs(cardA)).toBeTruthy();
                    }
                    else {
                        expect(cardA.hasSameSuitAs(cardB)).not.toBeTruthy();
                        expect(cardB.hasSameSuitAs(cardA)).not.toBeTruthy();
                    }
                }
            }
        });
    });
}

// hasHigherSuitThan(other: PlayingCard): boolean
function testHasHigherSuitThan(): void {
    describe('hasHigherSuitThan()', () => {

        test('if either card is a joker, returns false', () => {
            const joker = new PlayingCard(0);
            for (let t = 0; t <= 52; t++) {
                const other = new PlayingCard(t);
                expect(joker.hasHigherSuitThan(other)).toBeFalsy();
                expect(other.hasHigherSuitThan(joker)).toBeFalsy();
            }
        });

        test('matches ONLY against cards with a higher suit', () => {
            for (let t1 = 1; t1 <= 52; t1++) {
                for (let t2 = 1; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.suit.number > cardB.suit.number) {
                        expect(cardA.hasHigherSuitThan(cardB)).toBeTruthy();
                        expect(cardB.hasHigherSuitThan(cardA)).not.toBeTruthy();
                    }
                    else if (cardA.suit.number < cardB.suit.number) {
                        expect(cardA.hasHigherSuitThan(cardB)).not.toBeTruthy();
                        expect(cardB.hasHigherSuitThan(cardA)).toBeTruthy();
                    }
                }
            }
        });

    });
}

// hasLowerSuitThan(other: PlayingCard): boolean
function testHasLowerSuitThan(): void {
    describe('hasLowerSuitThan()', () => {

        test('if either card is a joker, returns false', () => {
            const joker = new PlayingCard(0);
            for (let t = 0; t <= 52; t++) {
                const other = new PlayingCard(t);
                expect(joker.hasLowerSuitThan(other)).toBeFalsy();
                expect(other.hasLowerSuitThan(joker)).toBeFalsy();
            }
        });

        test('matches ONLY against cards with a lower suit', () => {
            for (let t1 = 1; t1 <= 52; t1++) {
                for (let t2 = 1; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.suit.number < cardB.suit.number) {
                        expect(cardA.hasLowerSuitThan(cardB)).toBeTruthy();
                        expect(cardB.hasLowerSuitThan(cardA)).not.toBeTruthy();
                    }
                    else if (cardA.suit.number > cardB.suit.number) {
                        expect(cardA.hasLowerSuitThan(cardB)).not.toBeTruthy();
                        expect(cardB.hasLowerSuitThan(cardA)).toBeTruthy();
                    }
                }
            }
        });

    });
}

// isHigherThan(other: PlayingCard): boolean
function testIsHigherThan(): void {
    describe('isHigherThan()', () => {

        // a joker is higher than any other card
        test('a joker is higher than any other card', () => {
            const joker = new PlayingCard(0);
            for (let t = 1; t <= 52; t++) {
                const other = new PlayingCard(t);
                expect(joker.isHigherThan(other)).toBeTruthy();
            }
        });

        // false if other card is a joker
        test('false if other card is a joker', () => {
            const joker = new PlayingCard(0);
            for (let t = 1; t <= 52; t++) {
                const other = new PlayingCard(t);
                expect(other.isHigherThan(joker)).not.toBeTruthy();
            }
        });

        // sorted by rank if ranks not the same
        test('sorted by rank if ranks not the same', () => {
            for (let t1 = 1; t1 <= 52; t1++) {
                for (let t2 = 1; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.rank.number > cardB.rank.number) {
                        expect(cardA.isHigherThan(cardB)).toBeTruthy();
                    }
                    if (cardA.rank.number < cardB.rank.number) {
                        expect(cardB.isHigherThan(cardA)).toBeTruthy();
                    }
                }
            }
        });

        // sorted by suit if rank is the same
        test('sorted by suit if rank is the same', () => {
            for (let t1 = 1; t1 <= 52; t1++) {
                for (let t2 = 1; t2 <= 52; t2++) {
                    const cardA = new PlayingCard(t1);
                    const cardB = new PlayingCard(t2);
                    if (cardA.hasSameRankAs(cardB)) {
                        if (cardA.suit.number > cardB.suit.number) {
                            expect(cardA.isHigherThan(cardB)).toBeTruthy();
                            expect(cardB.isHigherThan(cardA)).not.toBeTruthy();
                        }
                        if (cardA.suit.number < cardB.suit.number) {
                            expect(cardA.isHigherThan(cardB)).not.toBeTruthy();
                            expect(cardB.isHigherThan(cardA)).toBeTruthy();
                        }
                    }
                }
            }
        });

    });
}
