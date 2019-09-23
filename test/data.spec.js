global.window = global;
global.assert = require('chai').assert;
require("../src/data/worldbank/worldbank.js");
require('../src/data.js');
require('./data.spec.js');

describe("window.wBank", () => {
    it("debería ser un objeto", () => {
        assert.equal(typeof window.wBank, "object");
    });
});
describe("window.wBank.filterEMP", () => {
    const sampleData = [
        {
            "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
            "indicatorCode": "SL.TLF.PART.FE.ZS"
        },

        {
            "indicatorName": "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)",
            "indicatorCode": "SL.TLF.INTM.FE.ZS"
        },

        {
            "indicatorName": "Tasa de población activa, mujeres (% de la población femenina mayor de 15 años) (estimación modelado OIT)",
            "indicatorCode": "SL.TLF.CACT.FE.ZS"
        }
    ];

    it("debería ser una función", () => {
        assert.equal(typeof window.wBank.filterEMP, "function");
    });

    it('debería retornar el indicador que incluye ".FE"', () => {
        assert.deepEqual(
            window.wBank.filterEMP((sampleData), "SL.TLF.INTM.FE.ZS"), [{
                "indicatorName": "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)",
                "indicatorCode": "SL.TLF.INTM.FE.ZS"
            }])
    })
});

describe("window.wBank.filterED", () => {
    const dataSample = [
        { 
            "indicatorName": "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)",
            "indicatorCode": "SL.TLF.INTM.FE.ZS"
        },

        {
            "indicatorName": "Fuerza laboral con educación básica, mujeres (% de la fuerza laboral femenina)",
            "indicatorCode": "SL.TLF.BASC.FE.ZS"
        },

        {
            "indicatorName": "Fuerza laboral con educación avanzada, mujeres (% de la fuerza laboral femenina)",
            "indicatorCode": "SL.TLF.ADVN.FE.ZS"
        }
    ];

    it("debería ser una función", () => {
        assert.equal(typeof window.wBank.filterED, "function");
    });

    it('debería retornar el indicador que incluye "educación"', () => {
        assert.deepEqual(
            window.wBank.filterED((dataSample), "SL.TLF.INTM.FE.ZS"), [{
                "indicatorName": "Fuerza laboral con educación avanzada, mujeres (% de la fuerza laboral femenina)",
                "indicatorCode": "SL.TLF.ADVN.FE.ZS"
            }])
    })
});
