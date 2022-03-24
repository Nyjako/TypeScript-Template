import * as math from './math';
import * as str  from './string';

function main() {
    const hello = "Hello World";
    console.log(hello);
    console.log(str.get_part(hello, 0, 5));
    console.log(str.get_part(hello, 6));
    console.log('\n');
    console.log('2+5=' + math.add(2,5));
    console.log('5-2=' + math.subtract(5,2));
    console.log('5*2=' + math.multiply(5,2));
    console.log('10/2=' + math.divide(10,2));
    console.log('2^2=' + math.pow(2,3));
}

main();