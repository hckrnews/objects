import { expect, describe, it } from '@jest/globals';
import Obj from '../objects';

const testSchema = {
    a: Number,
    b: Number,
};

const Test = Obj({ schema: testSchema });

describe('Test objects.js every', () => {
    it('It should return true because every value is below 4', () => {
        const input = {
            a: 1,
            b: 2,
            c: 3,
        };

        expect(Test.create(input).every((x) => x < 4)).toBeTruthy();
    });

    it('It should return false because not every value is below 3', () => {
        const input = {
            a: 1,
            b: 2,
            c: 3,
        };

        expect(Test.create(input).every((x) => x < 3)).toBeFalsy();
    });

    it('It should return true because every flat value is below 3', () => {
        const input = {
            a: 1,
            b: 2,
            c: [1, 2],
            d: { e: 1, f: 2 },
            g: { h: { i: 1 } },
        };

        expect(Test.create(input).flatEvery((x) => x < 3)).toBeTruthy();
    });

    it('It should return false because not every flat value is 2', () => {
        const input = {
            a: 1,
            b: 2,
            c: [1, 2],
            d: { e: 1, f: 2 },
            g: { h: { i: 1 } },
        };

        expect(Test.create(input).flatEvery((x) => x === 2)).toBeFalsy();
    });
});
