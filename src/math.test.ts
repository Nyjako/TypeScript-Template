import * as math from './math';

test("Adding two numbers", () => {
    expect( math.add(2,5) ).toBe(7);
});

test("Subtracting two numbers", () => {
    expect( math.subtract(5,2) ).toBe(3);
});

test("Multiplying two numbers", () => {
    expect( math.multiply(2,5) ).toBe(10);
});

test("Divid two numbers", () => {
    expect( math.divide(10,2) ).toBe(5);
});

test("Exponentiation", () => {
    expect( math.pow(2,2) ).toBe(4);
});

test("Pow error with 0", () => {
    const t = () => {
        math.pow(2,0);
    };
    expect( t ).toThrow("'b' is 0 or negative");
});

test("Pow error with negative number", () => {
    const t = () => {
        math.pow(2,-1);
    };
    expect( t ).toThrow("'b' is 0 or negative");
});