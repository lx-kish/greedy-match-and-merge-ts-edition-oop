const expect = require('chai').expect;
const fragmentsModification = require('../src/main.js').FragmentsModification;

describe('merge fragments', () => {
    it(`send 'foo', 'bar' and 0 should return 'foobar'`, () => {
        const result = fragmentsModification.prototype.merge('foo', 'bar', 0);
        expect(result).to.equal('foobar');
    })
    it(`send 'underst', 'derstanding' and 5 should return 'understanding'`, () => {
        const result = fragmentsModification.prototype.merge('underst', 'derstanding', 5);
        expect(result).to.equal('understanding');
    })
})

describe('remove fragments', () => {
    it(`send 0 should return ['bar']`, () => {
        const result = fragmentsModification.prototype.remove(["foo","bar"], 0);
        expect(result).to.deep.equal(['bar']);
    })
    it(`send 0 should return ['bar']`, () => {
        const result = fragmentsModification.prototype.remove(["foo","bar"], 1);
        expect(result).to.deep.equal(['foo']);
    })
})