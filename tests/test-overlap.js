const expect = require('chai').expect;
const overlap = require('../src/main.js').Overlap;

describe('one fragment contains the other', () => {
    it(`send 'underst' and 'derstanding' should return 5`, () => {
        const result = overlap.prototype.findOverlap('underst', 'derstanding');
        expect(result).to.equal(5);
    })
    it(`send 'foo' and 'bar' should return 0`, () => {
        const result = overlap.prototype.findOverlap('foo', 'bar');
        expect(result).to.equal(0);
    })
})