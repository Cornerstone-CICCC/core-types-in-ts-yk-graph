"use strict";
/*
Create a function throwError that throws an error.
Specify the return type of the function as never.
Call the function and catch the error.
Return void and try to see the difference. Try to return something.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function throwError() {
    throw new Error('This is an error!');
}
try {
    throwError();
}
catch (error) {
    if (error instanceof Error) {
        console.error(`Caught an error: ${error.message}`);
    }
    else {
        console.error('Caught an unknown error.');
    }
}
function throwErrorVoid() {
    throw new Error('This is an error!');
}
try {
    throwErrorVoid();
}
catch (error) {
    if (error instanceof Error) {
        console.error(`Caught an error: ${error.message}`);
    }
    else {
        console.error('Caught an unknown error.');
    }
}
//# sourceMappingURL=ex09.js.map