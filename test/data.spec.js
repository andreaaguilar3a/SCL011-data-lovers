global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('./data.spec.js');

describe('filterEMP', () => {

    it('debería ser una función', () => {
        assert.equal(typeof filterEMP, 'function');
    });



});

/*
describe("window.worldBank", () => {
    it("debería ser un objeto", () => {
        assert.equal(typeof window.worldBank, "object");
    });
});

describe("window.worldBank.dataCountry", () => {
    const muestra = {
        PER: { indicators: "Array(139)" },
    };
    it("debería ser una función", () => {
        assert.equal(typeof window.worldBank.dataCountry, "function");
    });

    it('debería retornar el objeto "PER"', () => {
        assert.deepEqual(
            window.worldBank.dataCountry(muestra, {
                PER: { indicators: "Array(139)" }
            })
        );
    });
});*/