function printDirection(direction: 'left' | 'right') {
  if (direction === 'left') {
    console.log('👈️')
  } else {
    console.log('👉️')
  }
}

printDirection('left')
printDirection('right')
