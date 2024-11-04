/**
 * 
 */

import * as EXPECT from '@brendangooch/jest-expect';
import { getSuitFromType } from './get-suit-from-type.js';

testAll();
function testAll(): void {
    describe('get-suit-from-type', () => {

        // joker
        test('type 0 returns 0', () => { EXPECT.toBe(getSuitFromType(0), 0) });

        // clubs
        test('type 1 returns 1', () => { EXPECT.toBe(getSuitFromType(1), 1) });
        test('type 2 returns 1', () => { EXPECT.toBe(getSuitFromType(2), 1) });
        test('type 3 returns 1', () => { EXPECT.toBe(getSuitFromType(3), 1) });
        test('type 4 returns 1', () => { EXPECT.toBe(getSuitFromType(4), 1) });
        test('type 5 returns 1', () => { EXPECT.toBe(getSuitFromType(5), 1) });
        test('type 6 returns 1', () => { EXPECT.toBe(getSuitFromType(6), 1) });
        test('type 7 returns 1', () => { EXPECT.toBe(getSuitFromType(7), 1) });
        test('type 8 returns 1', () => { EXPECT.toBe(getSuitFromType(8), 1) });
        test('type 9 returns 1', () => { EXPECT.toBe(getSuitFromType(9), 1) });
        test('type 10 returns 1', () => { EXPECT.toBe(getSuitFromType(10), 1) });
        test('type 11 returns 1', () => { EXPECT.toBe(getSuitFromType(11), 1) });
        test('type 12 returns 1', () => { EXPECT.toBe(getSuitFromType(12), 1) });
        test('type 13 returns 1', () => { EXPECT.toBe(getSuitFromType(13), 1) });

        // hearts
        test('type 14 returns 2', () => { EXPECT.toBe(getSuitFromType(14), 2) });
        test('type 15 returns 2', () => { EXPECT.toBe(getSuitFromType(15), 2) });
        test('type 16 returns 2', () => { EXPECT.toBe(getSuitFromType(16), 2) });
        test('type 17 returns 2', () => { EXPECT.toBe(getSuitFromType(17), 2) });
        test('type 18 returns 2', () => { EXPECT.toBe(getSuitFromType(18), 2) });
        test('type 19 returns 2', () => { EXPECT.toBe(getSuitFromType(19), 2) });
        test('type 20 returns 2', () => { EXPECT.toBe(getSuitFromType(20), 2) });
        test('type 21 returns 2', () => { EXPECT.toBe(getSuitFromType(21), 2) });
        test('type 22 returns 2', () => { EXPECT.toBe(getSuitFromType(22), 2) });
        test('type 23 returns 2', () => { EXPECT.toBe(getSuitFromType(23), 2) });
        test('type 24 returns 2', () => { EXPECT.toBe(getSuitFromType(24), 2) });
        test('type 25 returns 2', () => { EXPECT.toBe(getSuitFromType(25), 2) });
        test('type 26 returns 2', () => { EXPECT.toBe(getSuitFromType(26), 2) });

        // spades
        test('type 27 returns 3', () => { EXPECT.toBe(getSuitFromType(27), 3) });
        test('type 28 returns 3', () => { EXPECT.toBe(getSuitFromType(28), 3) });
        test('type 29 returns 3', () => { EXPECT.toBe(getSuitFromType(29), 3) });
        test('type 30 returns 3', () => { EXPECT.toBe(getSuitFromType(30), 3) });
        test('type 31 returns 3', () => { EXPECT.toBe(getSuitFromType(31), 3) });
        test('type 32 returns 3', () => { EXPECT.toBe(getSuitFromType(32), 3) });
        test('type 33 returns 3', () => { EXPECT.toBe(getSuitFromType(33), 3) });
        test('type 34 returns 3', () => { EXPECT.toBe(getSuitFromType(34), 3) });
        test('type 35 returns 3', () => { EXPECT.toBe(getSuitFromType(35), 3) });
        test('type 36 returns 3', () => { EXPECT.toBe(getSuitFromType(36), 3) });
        test('type 37 returns 3', () => { EXPECT.toBe(getSuitFromType(37), 3) });
        test('type 38 returns 3', () => { EXPECT.toBe(getSuitFromType(38), 3) });
        test('type 39 returns 3', () => { EXPECT.toBe(getSuitFromType(39), 3) });

        // hearts
        test('type 40 returns 4', () => { EXPECT.toBe(getSuitFromType(40), 4) });
        test('type 41 returns 4', () => { EXPECT.toBe(getSuitFromType(41), 4) });
        test('type 42 returns 4', () => { EXPECT.toBe(getSuitFromType(42), 4) });
        test('type 43 returns 4', () => { EXPECT.toBe(getSuitFromType(43), 4) });
        test('type 44 returns 4', () => { EXPECT.toBe(getSuitFromType(44), 4) });
        test('type 45 returns 4', () => { EXPECT.toBe(getSuitFromType(45), 4) });
        test('type 46 returns 4', () => { EXPECT.toBe(getSuitFromType(46), 4) });
        test('type 47 returns 4', () => { EXPECT.toBe(getSuitFromType(47), 4) });
        test('type 48 returns 4', () => { EXPECT.toBe(getSuitFromType(48), 4) });
        test('type 49 returns 4', () => { EXPECT.toBe(getSuitFromType(49), 4) });
        test('type 50 returns 4', () => { EXPECT.toBe(getSuitFromType(50), 4) });
        test('type 51 returns 4', () => { EXPECT.toBe(getSuitFromType(51), 4) });
        test('type 52 returns 4', () => { EXPECT.toBe(getSuitFromType(52), 4) });

    });
}