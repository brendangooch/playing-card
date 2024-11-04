/**
 * 
 */

import * as EXPECT from '@brendangooch/jest-expect';
import { getRankFromType } from './get-rank-from-type.js';

testAll();
function testAll(): void {
    describe('get-rank-from-type', () => {

        // joker
        test('type 0 returns 0', () => { EXPECT.toBe(getRankFromType(0), 0) });

        // clubs
        test('type 1 returns 1', () => { EXPECT.toBe(getRankFromType(1), 1) });
        test('type 2 returns 2', () => { EXPECT.toBe(getRankFromType(2), 2) });
        test('type 3 returns 3', () => { EXPECT.toBe(getRankFromType(3), 3) });
        test('type 4 returns 4', () => { EXPECT.toBe(getRankFromType(4), 4) });
        test('type 5 returns 5', () => { EXPECT.toBe(getRankFromType(5), 5) });
        test('type 6 returns 6', () => { EXPECT.toBe(getRankFromType(6), 6) });
        test('type 7 returns 7', () => { EXPECT.toBe(getRankFromType(7), 7) });
        test('type 8 returns 8', () => { EXPECT.toBe(getRankFromType(8), 8) });
        test('type 9 returns 9', () => { EXPECT.toBe(getRankFromType(9), 9) });
        test('type 10 returns 10', () => { EXPECT.toBe(getRankFromType(10), 10) });
        test('type 11 returns 11', () => { EXPECT.toBe(getRankFromType(11), 11) });
        test('type 12 returns 12', () => { EXPECT.toBe(getRankFromType(12), 12) });
        test('type 13 returns 13', () => { EXPECT.toBe(getRankFromType(13), 13) });

        // hearts
        test('type 14 returns 1', () => { EXPECT.toBe(getRankFromType(14), 1) });
        test('type 15 returns 2', () => { EXPECT.toBe(getRankFromType(15), 2) });
        test('type 16 returns 3', () => { EXPECT.toBe(getRankFromType(16), 3) });
        test('type 17 returns 4', () => { EXPECT.toBe(getRankFromType(17), 4) });
        test('type 18 returns 5', () => { EXPECT.toBe(getRankFromType(18), 5) });
        test('type 19 returns 6', () => { EXPECT.toBe(getRankFromType(19), 6) });
        test('type 20 returns 7', () => { EXPECT.toBe(getRankFromType(20), 7) });
        test('type 21 returns 8', () => { EXPECT.toBe(getRankFromType(21), 8) });
        test('type 22 returns 9', () => { EXPECT.toBe(getRankFromType(22), 9) });
        test('type 23 returns 10', () => { EXPECT.toBe(getRankFromType(23), 10) });
        test('type 24 returns 11', () => { EXPECT.toBe(getRankFromType(24), 11) });
        test('type 25 returns 12', () => { EXPECT.toBe(getRankFromType(25), 12) });
        test('type 26 returns 13', () => { EXPECT.toBe(getRankFromType(26), 13) });

        // spades
        test('type 27 returns 1', () => { EXPECT.toBe(getRankFromType(27), 1) });
        test('type 28 returns 2', () => { EXPECT.toBe(getRankFromType(28), 2) });
        test('type 29 returns 3', () => { EXPECT.toBe(getRankFromType(29), 3) });
        test('type 30 returns 4', () => { EXPECT.toBe(getRankFromType(30), 4) });
        test('type 31 returns 5', () => { EXPECT.toBe(getRankFromType(31), 5) });
        test('type 32 returns 6', () => { EXPECT.toBe(getRankFromType(32), 6) });
        test('type 33 returns 7', () => { EXPECT.toBe(getRankFromType(33), 7) });
        test('type 34 returns 8', () => { EXPECT.toBe(getRankFromType(34), 8) });
        test('type 35 returns 9', () => { EXPECT.toBe(getRankFromType(35), 9) });
        test('type 36 returns 10', () => { EXPECT.toBe(getRankFromType(36), 10) });
        test('type 37 returns 11', () => { EXPECT.toBe(getRankFromType(37), 11) });
        test('type 38 returns 12', () => { EXPECT.toBe(getRankFromType(38), 12) });
        test('type 39 returns 13', () => { EXPECT.toBe(getRankFromType(39), 13) });

        // hearts
        test('type 40 returns 1', () => { EXPECT.toBe(getRankFromType(40), 1) });
        test('type 41 returns 2', () => { EXPECT.toBe(getRankFromType(41), 2) });
        test('type 42 returns 3', () => { EXPECT.toBe(getRankFromType(42), 3) });
        test('type 43 returns 4', () => { EXPECT.toBe(getRankFromType(43), 4) });
        test('type 44 returns 5', () => { EXPECT.toBe(getRankFromType(44), 5) });
        test('type 45 returns 6', () => { EXPECT.toBe(getRankFromType(45), 6) });
        test('type 46 returns 7', () => { EXPECT.toBe(getRankFromType(46), 7) });
        test('type 47 returns 8', () => { EXPECT.toBe(getRankFromType(47), 8) });
        test('type 48 returns 9', () => { EXPECT.toBe(getRankFromType(48), 9) });
        test('type 49 returns 10', () => { EXPECT.toBe(getRankFromType(49), 10) });
        test('type 50 returns 11', () => { EXPECT.toBe(getRankFromType(50), 11) });
        test('type 51 returns 12', () => { EXPECT.toBe(getRankFromType(51), 12) });
        test('type 52 returns 13', () => { EXPECT.toBe(getRankFromType(52), 13) });

    });
}