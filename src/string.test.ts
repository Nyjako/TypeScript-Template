import * as str from './string';

const hello = "Hello World";

test("Getting part of string", () => {
    expect(str.get_part(hello, 0, 5)).toBe("Hello");
});

test("Getting part of string without length", () => {
    expect(str.get_part(hello, 6)).toBe("World");
});

test("Getting part of string error, length smaller than 1", () => {
    const t = () => {
        str.get_part(hello, 6, 0);
    };
    expect( t ).toThrow("Length parameter is wrong");
});

test("Getting part of string error, length bigger than string length", () => {
    const t = () => {
        str.get_part(hello, 6, hello.length);
    };
    expect( t ).toThrow("Length parameter is wrong");
});