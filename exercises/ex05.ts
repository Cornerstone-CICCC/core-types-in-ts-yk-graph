/*
Create an enum called Day with values representing the days of the week (e.g., Sunday, Monday, etc.).
Declare variables using the Day enum to represent the current day and print it.
Create an interface of Race, add some properties, like participants, first, second and third places, and also the day of the race using the enum.
*/

enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const currentDay: number = new Date().getDay()
console.log(`Today is: ${Day[currentDay]}`)

interface Race {
  participants: number
  raceDay: Day
}

const raceData: Race[] = [
  {
    participants: 10,
    raceDay: Day.Saturday,
  },
  {
    participants: 8,
    raceDay: Day.Sunday,
  },
]

for (const race of raceData) {
  console.log(
    `Race with ${race.participants} participants is on ${Day[race.raceDay]}`,
  )
}
