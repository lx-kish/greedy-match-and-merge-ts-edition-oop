const expect = require('chai').expect;
const iteration = require('../src/main.js').Iteration;

const iteration1 = new iteration(['underst','derstanding']);
const iteration2 = new iteration(['under', 'standing']);
const iteration3 = new iteration(['understanding', 'stand']);
const iteration4 = new iteration(['understanding', 'understanding']);

describe('merge/concatenate/delete two fragments in one iteration', () => {
    it(`merge: send 'underst' and 'derstanding' should return 'understanding'`, () => {
        const result = iteration1.findOverlappingPatterns();
        expect(result).to.deep.equal(['understanding']);
    });

    it(`concatenation: send 'under' and 'standing' should return 'understanding'`, () => {
        const result = iteration2.findOverlappingPatterns();
        expect(result).to.deep.equal(['understanding']);
    });

    it(`deleting: send 'understanding' and 'stand' should return 'understanding'`, () => {
        const result = iteration3.findOverlappingPatterns();
        expect(result).to.deep.equal(['understanding']);
    });

    it(`deleting: send 'understanding' and 'understanding' should return 'understanding'`, () => {
        const result = iteration4.findOverlappingPatterns();
        expect(result).to.deep.equal(['understanding']);
    });
});