function displayValue(value: unknown): void {
  if (typeof value === 'string') {
    console.log(`The value is a string: ${value}`)
  } else if (typeof value === 'number') {
    console.log(`The value is a number: ${value}`)
  } else {
    console.log('The value is of an unknown type.')
  }
}

displayValue('Hello, World!')
displayValue(42)
displayValue(true)
