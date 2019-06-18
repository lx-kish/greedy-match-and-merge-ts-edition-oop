const expect = require('chai').expect;
const contents = require('../src/main.js').Contents;

describe('one fragment contains the other', () => {
    it(`send 'foo' and 'bar' should return false`, () => {
        const result = contents.prototype.exists('foo', 'bar');
        expect(result).to.equal(false);
    })
    it(`send 'understanding' and 'derst' should return true`, () => {
        const result = contents.prototype.exists('understanding', 'derst');
        expect(result).to.equal(true);
    })
})