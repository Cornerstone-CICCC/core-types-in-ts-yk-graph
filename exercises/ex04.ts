type Coordinate = [number, number]

const coordinate: Coordinate = [10, 20]

interface Location {
  description: string
  coordinates: Coordinate
}

const location: Location = {
  description: 'test place',
  coordinates: coordinate,
}

console.log(location)
