"use strict";
/*
Create an enum called Day with values representing the days of the week (e.g., Sunday, Monday, etc.).
Declare variables using the Day enum to represent the current day and print it.
Create an interface of Race, add some properties, like participants, first, second and third places, and also the day of the race using the enum.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
const currentDay = new Date().getDay();
console.log(`Today is: ${Day[currentDay]}`);
const raceData = [
    {
        participants: 10,
        raceDay: Day.Saturday,
    },
    {
        participants: 8,
        raceDay: Day.Sunday,
    },
];
for (const race of raceData) {
    console.log(`Race with ${race.participants} participants is on ${Day[race.raceDay]}`);
}
//# sourceMappingURL=ex05.js.map