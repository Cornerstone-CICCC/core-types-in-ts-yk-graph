"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reservation = {
    customerInformation: 'John Doe',
    paymentInformation: 'Visa **** 1234',
    checkOut: new Date('2026-04-10'),
    checkIn: new Date('2026-04-15'),
};
console.log(`Customer: ${reservation.customerInformation}
Payment: ${reservation.paymentInformation}
Check-Out: ${reservation.checkOut.toDateString()}
Check-In: ${reservation.checkIn.toDateString()}`);
//# sourceMappingURL=ex01.js.map