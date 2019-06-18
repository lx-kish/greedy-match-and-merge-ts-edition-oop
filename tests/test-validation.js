const expect = require('chai').expect;
const noPattern = require('../src/main.js').NoPatternsValidation;

describe('noPattern', () => {
    it('send emply array should return true', () => {
        const result = noPattern.prototype.isValid([]);
        expect(result).to.equal(true);
    })
    it('send not emply array should return false', () => {
        const result = noPattern.prototype.isValid(['Something inside']);
        expect(result).to.equal(false);
    })
})