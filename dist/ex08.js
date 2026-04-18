"use strict";
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