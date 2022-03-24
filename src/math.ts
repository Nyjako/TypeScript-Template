export function add(a: number, b:number): number {
    const output = a + b;
    return output;
}

export function subtract(a: number, b:number): number {
    const output = a - b;
    return output;
}

export function multiply(a: number, b:number): number {
    const output = a * b;
    return output;
}

export function divide(a: number, b: number): number {
    const output = a / b;
    return output;
}

export function pow(a: number, b: number): number {
    if (b <= 0) {
        throw "'b' is 0 or negative";
    }
    else if (b == 1) {
        return a;
    }
    else {
        return pow(a*a, --b);
    }
}