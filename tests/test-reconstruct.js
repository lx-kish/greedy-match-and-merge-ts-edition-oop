const expect = require('chai').expect;
const document = require('../src/main.js').OriginalDocument;

const testArray1 = [
    'verra, magna dui v',
    'mper viverra, magna d',
    'Nunc posuere, e',
    'ibulum felis, eget fauci',
    'ere, erat pulvinar semper v',
    'na dui vestibulum felis, eg',
    'eu ligula.',
    'iverra, magna dui vestibulum felis, eg',
    'per viverra, magna dui vestibulum f',
    ', magna dui vestibulum felis, eget fauc',
    'cibus magna sem e',
    'bus magna',
    'rra, magna dui vestibulum fel',
    'tibulum felis, eget faucibu',
    'a dui vestibulum felis, eget fau',
    're, erat pulv'
];
const document1 = new document(testArray1);

const testArray2 = [
    'itr maluisset has ea.',
    'Lorem ipsum do',
    'sum dolor sit amet, vi',
    'r sit amet, vis vidisse qualisqu',
    'disse qualisque appellant',
    'ellantur ut vix nihil scripto',
    'riptorem an, illud elit',
    'an, illud elitr maluisse',
    ', vis vidisse qualis',
    'se qualisque appellantur ut vix nihil scr'
];
const document2 = new document(testArray2);

const testArray3 = [  'm quaerat voluptatem.',
'pora incidunt ut labore et d',
', consectetur, adipisci velit',
'olore magnam aliqua',
'idunt ut labore et dolore magn',
'uptatem.',
'i dolorem ipsum qu',
'iquam quaerat vol',
'psum quia dolor sit amet, consectetur, a',
'ia dolor sit amet, conse',
'squam est, qui do',
'Neque porro quisquam est, qu',
'aerat voluptatem.',
'm eius modi tem',
'Neque porro qui',
', sed quia non numquam ei',
'lorem ipsum quia dolor sit amet',
'ctetur, adipisci velit, sed quia non numq',
'unt ut labore et dolore magnam aliquam qu',
'dipisci velit, sed quia non numqua',
'us modi tempora incid',
'Neque porro quisquam est, qui dolorem i',
'uam eius modi tem',
'pora inc',
'am al'];
const document3 = new document(testArray3);


describe('reconstuction of test documents', () => {
    it(`reconstruction of test document #1`, () => {
        const result = document1.reconstruct();
        expect(result).to.deep.equal(['Nunc posuere, erat pulvinar semper viverra, magna dui vestibulum felis, eget faucibus magna sem eu ligula.']);
    });

    it(`reconstruction of test document #2`, () => {
        const result = document2.reconstruct();
        expect(result).to.deep.equal(['Lorem ipsum dolor sit amet, vis vidisse qualisque appellantur ut vix nihil scriptorem an, illud elitr maluisset has ea.']);
    });

    it(`reconstruction of test document #3`, () => {
        const result = document3.reconstruct();
        expect(result).to.deep.equal(['Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.']);
    });
});