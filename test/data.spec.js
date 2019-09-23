global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('./data.spec.js');

describe("window.WORLBANK", () => {
    it("debería ser un objeto", () => {
        assert.equal(typeof window.WORLDBANK, "object");
    });
});

it("debería ser una función", () => {
    assert.equal(typeof window.FilterEMP, "function");
});

