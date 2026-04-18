"use strict";
/*
Create a function displayValue that takes a parameter of type unknown.
Use a type guard to check if the value is a string or a number and print it accordingly.
Create a function that receives a variable of the unknown type and make some operations. Eg: if is a string, try to loop through to print each char. Don't handle the other cases. Check how hard is to handle a function that receives this kind of type.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function displayValue(value) {
    if (typeof value === 'string') {
        console.log(`The value is a string: ${value}`);
    }
    else if (typeof value === 'number') {
        console.log(`The value is a number: ${value}`);
    }
    else {
        console.log('The value is of an unknown type.');
    }
}
displayValue('Hello, World!');
displayValue(42);
displayValue(true);
//# sourceMappingURL=ex08.js.map