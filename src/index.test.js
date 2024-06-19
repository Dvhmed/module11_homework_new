import { describe } from '@jest/globals';
import { countDown } from "./index.js";
import expect from 'expect';

describe('countDown', () => {
    it('should return 3, 2, 1', () => {
        expect(countDown(3)).toBe(console.log(3, 2, 1));
        expect(countDown(5)).toBe(console.log(5, 4, 3, 2, 1));
        expect(countDown(0)).toBe(console.log());
        expect(countDown(-2)).toBe(console.log());
        expect(countDown(1, 2)).toBe(console.log());
        
    });
})