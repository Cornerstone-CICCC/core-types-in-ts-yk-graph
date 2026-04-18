"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DayInMs = 1000 * 60 * 60 * 24;
const reservations = [
    {
        customerInformation: 'John Doe',
        paymentInformation: {
            isPayed: true,
            totalPrice: 0,
        },
        checkOut: new Date('2026-04-10'),
        checkIn: new Date('2026-04-15'),
        pricePerDay: 150,
    },
    {
        customerInformation: 'Jane Smith',
        paymentInformation: {
            isPayed: false,
            totalPrice: 0,
        },
        checkOut: new Date('2026-05-01'),
        checkIn: new Date('2026-05-05'),
        pricePerDay: 100,
    },
    {
        customerInformation: 'Alice Johnson',
        paymentInformation: {
            isPayed: false,
            totalPrice: 0,
        },
        checkOut: new Date('2026-06-20'),
        checkIn: new Date('2026-06-25'),
        pricePerDay: 200,
    },
];
for (const reservation of reservations) {
    const days = (reservation.checkIn.getTime() - reservation.checkOut.getTime()) / DayInMs;
    const totalPrice = days * reservation.pricePerDay;
    reservation.paymentInformation.totalPrice = totalPrice;
    console.log(`Customer: ${reservation.customerInformation}
Payment: ${reservation.paymentInformation.isPayed ? 'Paid' : 'Not Paid'}
Total Price: $${totalPrice}
Check-Out: ${reservation.checkOut.toDateString()}
Check-In: ${reservation.checkIn.toDateString()}
`);
}
//# sourceMappingURL=ex03.js.map