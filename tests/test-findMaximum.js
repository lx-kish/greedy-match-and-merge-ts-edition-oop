const expect = require('chai').expect;
const maximum = require('../src/main.js').Maximum;

describe('maximum of two numbers', () => {
    it('send 1, 2 should return 2', () => {
        const result = maximum.prototype.findMaximum(1, 2);
        expect(result).to.equal(2);
    })
    it('send 1, -2 should return 1', () => {
        const result = maximum.prototype.findMaximum(1, -2);
        expect(result).to.equal(1);
    })
    it('send -1, -2 should return -1', () => {
        const result = maximum.prototype.findMaximum(-1, -2);
        expect(result).to.equal(-1);
    })
})