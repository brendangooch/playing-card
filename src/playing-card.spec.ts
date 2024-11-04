/**
 * 
 */

import * as EXPECT from '@brendangooch/jest-expect';
import { type tPlayingCardType } from './index.js';
import { PlayingCard } from './playing-card.js';
import { Rank } from './rank.js';
import { Suit } from './suit.js';

testAll();
function testAll(): void {
    describe('PlayingCard', () => {

        testReturnsCorrectCardTypeForAllTypes();
        testReturnsCorrectCardNameForAllTypes();
        testReturnsCorrectDefiniteCardNameForAllTypes();
        testReturnsCorrectIndefiniteCardNameForAllTypes();
        testReturnsCorrectPluralCardNameForAllTypes();
        testCorrectlyIdentifiesAJoker();
        testClonedCardHasSamePropertiesAsOriginal();
        testClonedCardIsNOTTheSameObjectAsOriginal();
        testCorrectlyIdentifiesRankNumber();
        testCorrectlyIdentifiesSuitNumber();
        testReturnsTheCorrectNumericValueBetweenTwoCards();
        testReturnsMinus1IfEitherValueIsJokerOnValueBetweenCall();
        testIdentifiesIdenticalCards();
        test2JokersAreTheSameCard();
        testCanIdentifyCardsWithTheSameRank();
        testCanIdentifyCardsWithAHigherRank();
        testCanIdentifyCardsWithALowerRank();
        testJokersCannotHaveAHigherOrLowerRankButCanBeTheSameRank();
        testCanIdentifyCardsWithTheSameSuit();
        testCanIdentifyCardsWithAHigherSuit();
        testCanIdentifyCardsWithALowerSuit();
        testJokersCannotHaveAHigherOrLowerSuitButCanBeTheSameSuit();
        testIdentifiesAJokerAsORderedHigherThanAllOtherCards();
        testIdentifiesCardsWithAHigherRankAreOrderedHigher();
        testIdentifiesCardsWithTheSameRankAndAHigherSuitAreOrderedHigher();
        testIdentifiesAllOtherCardsAsNOTBeingOrderedHigher();

    });

}

// get type(): number
function testReturnsCorrectCardTypeForAllTypes(): void {
    test('returns correct card type for all types', () => {
        for (let type = 0; type <= 52; type++) {
            const card = new PlayingCard(<tPlayingCardType>type);
            EXPECT.toBe(card.type, type);
        }
    });
}

// get name(): string
function testReturnsCorrectCardNameForAllTypes(): void {
    describe('returns correct card name for all types', () => {

        testCardName(0, 'joker');

        testCardName(1, 'ace of clubs');
        testCardName(2, 'two of clubs');
        testCardName(3, 'three of clubs');
        testCardName(4, 'four of clubs');
        testCardName(5, 'five of clubs');
        testCardName(6, 'six of clubs');
        testCardName(7, 'seven of clubs');
        testCardName(8, 'eight of clubs');
        testCardName(9, 'nine of clubs');
        testCardName(10, 'ten of clubs');
        testCardName(11, 'jack of clubs');
        testCardName(12, 'queen of clubs');
        testCardName(13, 'king of clubs');

        testCardName(14, 'ace of hearts');
        testCardName(15, 'two of hearts');
        testCardName(16, 'three of hearts');
        testCardName(17, 'four of hearts');
        testCardName(18, 'five of hearts');
        testCardName(19, 'six of hearts');
        testCardName(20, 'seven of hearts');
        testCardName(21, 'eight of hearts');
        testCardName(22, 'nine of hearts');
        testCardName(23, 'ten of hearts');
        testCardName(24, 'jack of hearts');
        testCardName(25, 'queen of hearts');
        testCardName(26, 'king of hearts');

        testCardName(27, 'ace of spades');
        testCardName(28, 'two of spades');
        testCardName(29, 'three of spades');
        testCardName(30, 'four of spades');
        testCardName(31, 'five of spades');
        testCardName(32, 'six of spades');
        testCardName(33, 'seven of spades');
        testCardName(34, 'eight of spades');
        testCardName(35, 'nine of spades');
        testCardName(36, 'ten of spades');
        testCardName(37, 'jack of spades');
        testCardName(38, 'queen of spades');
        testCardName(39, 'king of spades');

        testCardName(40, 'ace of diamonds');
        testCardName(41, 'two of diamonds');
        testCardName(42, 'three of diamonds');
        testCardName(43, 'four of diamonds');
        testCardName(44, 'five of diamonds');
        testCardName(45, 'six of diamonds');
        testCardName(46, 'seven of diamonds');
        testCardName(47, 'eight of diamonds');
        testCardName(48, 'nine of diamonds');
        testCardName(49, 'ten of diamonds');
        testCardName(50, 'jack of diamonds');
        testCardName(51, 'queen of diamonds');
        testCardName(52, 'king of diamonds');

    });
}

// get nameDefinite(): string
function testReturnsCorrectDefiniteCardNameForAllTypes(): void {
    describe('returns correct definite card name for all types', () => {

        testDefiniteCardName(0, 'a joker');

        testDefiniteCardName(1, 'an ace of clubs');
        testDefiniteCardName(2, 'a two of clubs');
        testDefiniteCardName(3, 'a three of clubs');
        testDefiniteCardName(4, 'a four of clubs');
        testDefiniteCardName(5, 'a five of clubs');
        testDefiniteCardName(6, 'a six of clubs');
        testDefiniteCardName(7, 'a seven of clubs');
        testDefiniteCardName(8, 'an eight of clubs');
        testDefiniteCardName(9, 'a nine of clubs');
        testDefiniteCardName(10, 'a ten of clubs');
        testDefiniteCardName(11, 'a jack of clubs');
        testDefiniteCardName(12, 'a queen of clubs');
        testDefiniteCardName(13, 'a king of clubs');

        testDefiniteCardName(14, 'an ace of hearts');
        testDefiniteCardName(15, 'a two of hearts');
        testDefiniteCardName(16, 'a three of hearts');
        testDefiniteCardName(17, 'a four of hearts');
        testDefiniteCardName(18, 'a five of hearts');
        testDefiniteCardName(19, 'a six of hearts');
        testDefiniteCardName(20, 'a seven of hearts');
        testDefiniteCardName(21, 'an eight of hearts');
        testDefiniteCardName(22, 'a nine of hearts');
        testDefiniteCardName(23, 'a ten of hearts');
        testDefiniteCardName(24, 'a jack of hearts');
        testDefiniteCardName(25, 'a queen of hearts');
        testDefiniteCardName(26, 'a king of hearts');

        testDefiniteCardName(27, 'an ace of spades');
        testDefiniteCardName(28, 'a two of spades');
        testDefiniteCardName(29, 'a three of spades');
        testDefiniteCardName(30, 'a four of spades');
        testDefiniteCardName(31, 'a five of spades');
        testDefiniteCardName(32, 'a six of spades');
        testDefiniteCardName(33, 'a seven of spades');
        testDefiniteCardName(34, 'an eight of spades');
        testDefiniteCardName(35, 'a nine of spades');
        testDefiniteCardName(36, 'a ten of spades');
        testDefiniteCardName(37, 'a jack of spades');
        testDefiniteCardName(38, 'a queen of spades');
        testDefiniteCardName(39, 'a king of spades');

        testDefiniteCardName(40, 'an ace of diamonds');
        testDefiniteCardName(41, 'a two of diamonds');
        testDefiniteCardName(42, 'a three of diamonds');
        testDefiniteCardName(43, 'a four of diamonds');
        testDefiniteCardName(44, 'a five of diamonds');
        testDefiniteCardName(45, 'a six of diamonds');
        testDefiniteCardName(46, 'a seven of diamonds');
        testDefiniteCardName(47, 'an eight of diamonds');
        testDefiniteCardName(48, 'a nine of diamonds');
        testDefiniteCardName(49, 'a ten of diamonds');
        testDefiniteCardName(50, 'a jack of diamonds');
        testDefiniteCardName(51, 'a queen of diamonds');
        testDefiniteCardName(52, 'a king of diamonds');

    });
}

// get nameIndefinite(): string
function testReturnsCorrectIndefiniteCardNameForAllTypes(): void {
    describe('returns correct indefinite card name for all types', () => {

        testIndefiniteCardName(0, 'the joker');

        testIndefiniteCardName(1, 'the ace of clubs');
        testIndefiniteCardName(2, 'the two of clubs');
        testIndefiniteCardName(3, 'the three of clubs');
        testIndefiniteCardName(4, 'the four of clubs');
        testIndefiniteCardName(5, 'the five of clubs');
        testIndefiniteCardName(6, 'the six of clubs');
        testIndefiniteCardName(7, 'the seven of clubs');
        testIndefiniteCardName(8, 'the eight of clubs');
        testIndefiniteCardName(9, 'the nine of clubs');
        testIndefiniteCardName(10, 'the ten of clubs');
        testIndefiniteCardName(11, 'the jack of clubs');
        testIndefiniteCardName(12, 'the queen of clubs');
        testIndefiniteCardName(13, 'the king of clubs');

        testIndefiniteCardName(14, 'the ace of hearts');
        testIndefiniteCardName(15, 'the two of hearts');
        testIndefiniteCardName(16, 'the three of hearts');
        testIndefiniteCardName(17, 'the four of hearts');
        testIndefiniteCardName(18, 'the five of hearts');
        testIndefiniteCardName(19, 'the six of hearts');
        testIndefiniteCardName(20, 'the seven of hearts');
        testIndefiniteCardName(21, 'the eight of hearts');
        testIndefiniteCardName(22, 'the nine of hearts');
        testIndefiniteCardName(23, 'the ten of hearts');
        testIndefiniteCardName(24, 'the jack of hearts');
        testIndefiniteCardName(25, 'the queen of hearts');
        testIndefiniteCardName(26, 'the king of hearts');

        testIndefiniteCardName(27, 'the ace of spades');
        testIndefiniteCardName(28, 'the two of spades');
        testIndefiniteCardName(29, 'the three of spades');
        testIndefiniteCardName(30, 'the four of spades');
        testIndefiniteCardName(31, 'the five of spades');
        testIndefiniteCardName(32, 'the six of spades');
        testIndefiniteCardName(33, 'the seven of spades');
        testIndefiniteCardName(34, 'the eight of spades');
        testIndefiniteCardName(35, 'the nine of spades');
        testIndefiniteCardName(36, 'the ten of spades');
        testIndefiniteCardName(37, 'the jack of spades');
        testIndefiniteCardName(38, 'the queen of spades');
        testIndefiniteCardName(39, 'the king of spades');

        testIndefiniteCardName(40, 'the ace of diamonds');
        testIndefiniteCardName(41, 'the two of diamonds');
        testIndefiniteCardName(42, 'the three of diamonds');
        testIndefiniteCardName(43, 'the four of diamonds');
        testIndefiniteCardName(44, 'the five of diamonds');
        testIndefiniteCardName(45, 'the six of diamonds');
        testIndefiniteCardName(46, 'the seven of diamonds');
        testIndefiniteCardName(47, 'the eight of diamonds');
        testIndefiniteCardName(48, 'the nine of diamonds');
        testIndefiniteCardName(49, 'the ten of diamonds');
        testIndefiniteCardName(50, 'the jack of diamonds');
        testIndefiniteCardName(51, 'the queen of diamonds');
        testIndefiniteCardName(52, 'the king of diamonds');

    });
}

// get namePlural(): string
function testReturnsCorrectPluralCardNameForAllTypes(): void {
    describe('returns correct plural card name for all types', () => {

        testPluralCardName(0, 'jokers');

        testPluralCardName(1, 'aces of clubs');
        testPluralCardName(2, 'twos of clubs');
        testPluralCardName(3, 'threes of clubs');
        testPluralCardName(4, 'fours of clubs');
        testPluralCardName(5, 'fives of clubs');
        testPluralCardName(6, 'sixes of clubs');
        testPluralCardName(7, 'sevens of clubs');
        testPluralCardName(8, 'eights of clubs');
        testPluralCardName(9, 'nines of clubs');
        testPluralCardName(10, 'tens of clubs');
        testPluralCardName(11, 'jacks of clubs');
        testPluralCardName(12, 'queens of clubs');
        testPluralCardName(13, 'kings of clubs');

        testPluralCardName(14, 'aces of hearts');
        testPluralCardName(15, 'twos of hearts');
        testPluralCardName(16, 'threes of hearts');
        testPluralCardName(17, 'fours of hearts');
        testPluralCardName(18, 'fives of hearts');
        testPluralCardName(19, 'sixes of hearts');
        testPluralCardName(20, 'sevens of hearts');
        testPluralCardName(21, 'eights of hearts');
        testPluralCardName(22, 'nines of hearts');
        testPluralCardName(23, 'tens of hearts');
        testPluralCardName(24, 'jacks of hearts');
        testPluralCardName(25, 'queens of hearts');
        testPluralCardName(26, 'kings of hearts');

        testPluralCardName(27, 'aces of spades');
        testPluralCardName(28, 'twos of spades');
        testPluralCardName(29, 'threes of spades');
        testPluralCardName(30, 'fours of spades');
        testPluralCardName(31, 'fives of spades');
        testPluralCardName(32, 'sixes of spades');
        testPluralCardName(33, 'sevens of spades');
        testPluralCardName(34, 'eights of spades');
        testPluralCardName(35, 'nines of spades');
        testPluralCardName(36, 'tens of spades');
        testPluralCardName(37, 'jacks of spades');
        testPluralCardName(38, 'queens of spades');
        testPluralCardName(39, 'kings of spades');

        testPluralCardName(40, 'aces of diamonds');
        testPluralCardName(41, 'twos of diamonds');
        testPluralCardName(42, 'threes of diamonds');
        testPluralCardName(43, 'fours of diamonds');
        testPluralCardName(44, 'fives of diamonds');
        testPluralCardName(45, 'sixes of diamonds');
        testPluralCardName(46, 'sevens of diamonds');
        testPluralCardName(47, 'eights of diamonds');
        testPluralCardName(48, 'nines of diamonds');
        testPluralCardName(49, 'tens of diamonds');
        testPluralCardName(50, 'jacks of diamonds');
        testPluralCardName(51, 'queens of diamonds');
        testPluralCardName(52, 'kings of diamonds');

    });
}

// isJoker(): boolean
function testCorrectlyIdentifiesAJoker(): void {
    test('correctly identifies a joker', () => {
        for (let type = 0; type <= 52; type++) {
            const card = new PlayingCard(<tPlayingCardType>type);
            if (type === 0) EXPECT.truthy(card.isJoker);
            else EXPECT.falsy(card.isJoker);
        }
    });
}

// clone(): PlayingCard
function testClonedCardHasSamePropertiesAsOriginal(): void {
    test('cloned card has same properties as original', () => {
        for (let type = 0; type <= 52; type++) {
            const original = new PlayingCard(<tPlayingCardType>type);
            const clone = original.clone();
            EXPECT.toBe(clone.type, original.type);
            EXPECT.toBe(clone.name, original.name);
            EXPECT.truthy(clone.isSameCardAs(original));
            EXPECT.truthy(original.isSameCardAs(original));
            EXPECT.truthy(clone.hasSameRankAs(original));
            EXPECT.truthy(original.hasSameRankAs(original));
            EXPECT.truthy(clone.hasSameSuitAs(original));
            EXPECT.truthy(original.hasSameSuitAs(original));
        }
    });
}

function testClonedCardIsNOTTheSameObjectAsOriginal(): void {
    test('cloned card is not the same object as original', () => {
        const card = new PlayingCard(10);
        const clone = card.clone();
        EXPECT.falsy(card === clone);
    });
}

// isRankNumber(rank: number): boolean
function testCorrectlyIdentifiesRankNumber(): void {
    test('correctly identifies rank number', () => {
        for (let type = 0; type <= 52; type++) {
            const card = new PlayingCard(<tPlayingCardType>type);
            const rank = new Rank(<tPlayingCardType>type);
            EXPECT.truthy(card.isRankNumber(rank.number));
        }
    });
}

// isSuitNumber(suit: number): boolean
function testCorrectlyIdentifiesSuitNumber(): void {
    test('correctly identifies suit number', () => {
        for (let type = 0; type <= 52; type++) {
            const card = new PlayingCard(<tPlayingCardType>type);
            const suit = new Suit(<tPlayingCardType>type);
            EXPECT.truthy(card.isSuitNumber(suit.number));
        }
    });
}

// valueBetweenRanks(other: PlayingCard): number
function testReturnsTheCorrectNumericValueBetweenTwoCards(): void {
    test('returns the correct numeric value between two cards', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                const rank1 = new Rank(<tPlayingCardType>t1);
                const rank2 = new Rank(<tPlayingCardType>t2);
                const valueBetween = Math.abs(rank1.number - rank2.number);
                EXPECT.toBe(card1.valueBetweenRanks(card2), valueBetween);
                EXPECT.toBe(card2.valueBetweenRanks(card1), valueBetween);
            }
        }
    });
}

function testReturnsMinus1IfEitherValueIsJokerOnValueBetweenCall(): void {
    test('returns minus 1 if either value is joker on valueBetweenRanks() call', () => {
        for (let t1 = 0; t1 <= 52; t1++) {
            for (let t2 = 0; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.isJoker) EXPECT.toBe(card1.valueBetweenRanks(card2), -1);
                if (card1.isJoker) EXPECT.toBe(card2.valueBetweenRanks(card1), -1);
                if (card2.isJoker) EXPECT.toBe(card1.valueBetweenRanks(card2), -1);
                if (card2.isJoker) EXPECT.toBe(card2.valueBetweenRanks(card1), -1);
            }
        }
    });
}

// isSameCard(other: PlayingCard): boolean
function testIdentifiesIdenticalCards(): void {
    test('can identify identical cards', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.rank.number === card2.rank.number && card1.suit.number === card2.suit.number) {
                    EXPECT.truthy(card1.isSameCardAs(card2));
                    EXPECT.truthy(card2.isSameCardAs(card1));
                }
                else {
                    EXPECT.falsy(card1.isSameCardAs(card2));
                    EXPECT.falsy(card2.isSameCardAs(card1));
                }
            }
        }
    });
}

function test2JokersAreTheSameCard(): void {
    test('2 jokers are the same card', () => {
        const joker1 = new PlayingCard(0);
        const joker2 = new PlayingCard(0);
        EXPECT.truthy(joker1.isSameCardAs(joker2));
        EXPECT.truthy(joker2.isSameCardAs(joker1));
    });
}

// hasSameRankAs(other: PlayingCard): boolean
function testCanIdentifyCardsWithTheSameRank(): void {
    test('can identify cards with the same rank', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.rank.number === card2.rank.number) {
                    EXPECT.truthy(card1.hasSameRankAs(card2));
                    EXPECT.truthy(card2.hasSameRankAs(card1));
                }
                else {
                    EXPECT.falsy(card1.hasSameRankAs(card2));
                    EXPECT.falsy(card2.hasSameRankAs(card1));
                }
            }
        }
    });
}

// hasHigherRankThan(other: PlayingCard): boolean
function testCanIdentifyCardsWithAHigherRank(): void {
    test('can identify cards with a higher rank', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.rank.number > card2.rank.number) {
                    EXPECT.truthy(card1.hasHigherRankThan(card2));
                    EXPECT.falsy(card2.hasHigherRankThan(card1));
                }
                if (card2.rank.number > card1.rank.number) {
                    EXPECT.truthy(card2.hasHigherRankThan(card1));
                    EXPECT.falsy(card1.hasHigherRankThan(card2));
                }
            }
        }
    });
}

// hasLowerRankThan(other: PlayingCard): boolean
function testCanIdentifyCardsWithALowerRank(): void {
    test('can identify cards with a lower rank', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.rank.number < card2.rank.number) {
                    EXPECT.truthy(card1.hasLowerRankThan(card2));
                    EXPECT.falsy(card2.hasLowerRankThan(card1));
                }
                if (card2.rank.number < card1.rank.number) {
                    EXPECT.truthy(card2.hasLowerRankThan(card1));
                    EXPECT.falsy(card1.hasLowerRankThan(card2));
                }
            }
        }
    });
}

function testJokersCannotHaveAHigherOrLowerRankButCanBeTheSameRank(): void {
    test('jokers cannot have a higher or lower rank but can be the same rank', () => {
        const joker1 = new PlayingCard(0);
        const joker2 = new PlayingCard(0);
        EXPECT.falsy(joker1.hasHigherRankThan(joker2));
        EXPECT.falsy(joker2.hasHigherRankThan(joker1));
        EXPECT.falsy(joker1.hasLowerRankThan(joker2));
        EXPECT.falsy(joker2.hasLowerRankThan(joker1));
        EXPECT.truthy(joker1.hasSameRankAs(joker2));
        EXPECT.truthy(joker2.hasSameRankAs(joker1));
    });
}

// hasSameSuitAs(other: PlayingCard): boolean
function testCanIdentifyCardsWithTheSameSuit(): void {
    test('can identify cards with the same suit', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.suit.number === card2.suit.number) {
                    EXPECT.truthy(card1.hasSameSuitAs(card2));
                    EXPECT.truthy(card2.hasSameSuitAs(card1));
                }
                else {
                    EXPECT.falsy(card1.hasSameSuitAs(card2));
                    EXPECT.falsy(card2.hasSameSuitAs(card1));
                }
            }
        }
    });
}

// hasHigherSuitThan(other: PlayingCard): boolean
function testCanIdentifyCardsWithAHigherSuit(): void {
    test('can identify cards with a higher suit', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.suit.number > card2.suit.number) {
                    EXPECT.truthy(card1.hasHigherSuitThan(card2));
                    EXPECT.falsy(card2.hasHigherSuitThan(card1));
                }
                if (card2.suit.number > card1.suit.number) {
                    EXPECT.truthy(card2.hasHigherSuitThan(card1));
                    EXPECT.falsy(card1.hasHigherSuitThan(card2));
                }
            }
        }
    });
}

// hasLowerSuitThan(other: PlayingCard): boolean
function testCanIdentifyCardsWithALowerSuit(): void {
    test('can identify cards with a lower suit', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.suit.number < card2.suit.number) {
                    EXPECT.truthy(card1.hasLowerSuitThan(card2));
                    EXPECT.falsy(card2.hasLowerSuitThan(card1));
                }
                if (card2.suit.number < card1.suit.number) {
                    EXPECT.truthy(card2.hasLowerSuitThan(card1));
                    EXPECT.falsy(card1.hasLowerSuitThan(card2));
                }
            }
        }
    });
}

function testJokersCannotHaveAHigherOrLowerSuitButCanBeTheSameSuit(): void {
    test('jokers cannot have a higher or lower suit but can be the same suit', () => {
        const joker1 = new PlayingCard(0);
        const joker2 = new PlayingCard(0);
        EXPECT.falsy(joker1.hasHigherSuitThan(joker2));
        EXPECT.falsy(joker2.hasHigherSuitThan(joker1));
        EXPECT.falsy(joker1.hasLowerSuitThan(joker2));
        EXPECT.falsy(joker2.hasLowerSuitThan(joker1));
        EXPECT.truthy(joker1.hasSameSuitAs(joker2));
        EXPECT.truthy(joker2.hasSameSuitAs(joker1));
    });
}

// isHigherThan(other: PlayingCard): boolean
function testIdentifiesAJokerAsORderedHigherThanAllOtherCards(): void {
    test('identifies a joker as ordered higher than all other cards', () => {
        const joker = new PlayingCard(0);
        for (let type = 1; type <= 52; type++) {
            const other = new PlayingCard(<tPlayingCardType>type);
            EXPECT.truthy(joker.isHigherThan(other));
            EXPECT.falsy(other.isHigherThan(joker));
        }
    });
}

function testIdentifiesCardsWithAHigherRankAreOrderedHigher(): void {
    test('identifies cards with a higher rank are ordered higher', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.rank.number > card2.rank.number) {
                    EXPECT.truthy(card1.isHigherThan(card2));
                }
                if (card2.rank.number > card1.rank.number) {
                    EXPECT.truthy(card2.isHigherThan(card1));
                }
            }
        }
    });
}

function testIdentifiesCardsWithTheSameRankAndAHigherSuitAreOrderedHigher(): void {
    test('identifies cards with same rank and higher suit are ordered higher', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.hasSameRankAs(card2) && card1.hasHigherSuitThan(card2)) {
                    EXPECT.truthy(card1.isHigherThan(card2));
                }
                if (card2.hasSameRankAs(card1) && card2.hasHigherSuitThan(card1)) {
                    EXPECT.truthy(card2.isHigherThan(card1));
                }
            }
        }
    });
}

function testIdentifiesAllOtherCardsAsNOTBeingOrderedHigher(): void {
    test('identifies all other cards as NOT being ordered higher', () => {
        for (let t1 = 1; t1 <= 52; t1++) {
            for (let t2 = 1; t2 <= 52; t2++) {
                const card1 = new PlayingCard(<tPlayingCardType>t1);
                const card2 = new PlayingCard(<tPlayingCardType>t2);
                if (card1.hasLowerRankThan(card2) || (card1.hasSameRankAs(card2) && !card1.hasHigherSuitThan(card2))) {
                    EXPECT.falsy(card1.isHigherThan(card2));
                }
                if (card2.hasLowerRankThan(card1) || (card2.hasSameRankAs(card1) && !card2.hasHigherSuitThan(card1))) {
                    EXPECT.falsy(card2.isHigherThan(card1));
                }

            }
        }
    });
}



/**
 * UTILITY FUNCTIONS
 */

function testCardName(type: tPlayingCardType, name: string): void {
    test(`card type: ${type} has card name: ${name}`, () => {
        const card = new PlayingCard(type);
        EXPECT.toBe(card.name, name);
    });
}

function testDefiniteCardName(type: tPlayingCardType, name: string): void {
    test(`card type: ${type} has definite (a|an) card name: ${name}`, () => {
        const card = new PlayingCard(type);
        EXPECT.toBe(card.nameDefinite, name);
    });
}

function testIndefiniteCardName(type: tPlayingCardType, name: string): void {
    test(`card type: ${type} has indefinite (the) card name: ${name}`, () => {
        const card = new PlayingCard(type);
        EXPECT.toBe(card.nameIndefinite, name);
    });
}

function testPluralCardName(type: tPlayingCardType, name: string): void {
    test(`card type: ${type} has plural card name: ${name}`, () => {
        const card = new PlayingCard(type);
        EXPECT.toBe(card.namePlural, name);
    });
}