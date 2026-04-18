/*
Create a function throwError that throws an error.
Specify the return type of the function as never.
Call the function and catch the error.
Return void and try to see the difference. Try to return something.
*/

function throwError(): never {
  throw new Error('This is an error!')
}

try {
  throwError()
} catch (error) {
  if (error instanceof Error) {
    console.error(`Caught an error: ${error.message}`)
  } else {
    console.error('Caught an unknown error.')
  }
}

function throwErrorVoid(): void {
  throw new Error('This is an error!')
}

try {
  throwErrorVoid()
} catch (error) {
  if (error instanceof Error) {
    console.error(`Caught an error: ${error.message}`)
  } else {
    console.error('Caught an unknown error.')
  }
}
