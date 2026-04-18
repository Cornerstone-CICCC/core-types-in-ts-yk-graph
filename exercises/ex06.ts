function printId(id: number | string): void {
  if (typeof id === 'number') {
    console.log(`ID: ${id} is a number`)
  } else {
    console.log(`ID: ${id} is a string`)
  }
}

printId(123)
printId('abc')
