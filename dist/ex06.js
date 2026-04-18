"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    if (typeof id === 'number') {
        console.log(`ID: ${id} is a number`);
    }
    else {
        console.log(`ID: ${id} is a string`);
    }
}
printId(123);
printId('abc');
//# sourceMappingURL=ex06.js.map