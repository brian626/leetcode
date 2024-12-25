// 731. My Calendar II

// Implement a MyCalendarTwo class to store your events. A new event can be added if
// adding the event will not cause a triple booking.

// Your class will have one method, book(int start, int end). Formally, this represents a
// booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

// A triple booking happens when three events have some non-empty intersection (ie., there
// is some time that is common to all 3 events.)

// For each call to the method MyCalendar.book, return true if the event can be added to the
// calendar successfully without causing a triple booking. Otherwise, return false and do not
// add the event to the calendar.

// Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

// Example 1:

// MyCalendar();
// MyCalendar.book(10, 20); // returns true
// MyCalendar.book(50, 60); // returns true
// MyCalendar.book(10, 40); // returns true
// MyCalendar.book(5, 15); // returns false
// MyCalendar.book(5, 10); // returns true
// MyCalendar.book(25, 55); // returns true
// Explanation:
// The first two events can be booked.  The third event can be double booked.
// The fourth event (5, 15) can't be booked, because it would result in a triple booking.
// The fifth event (5, 10) can be booked, as it does not use time 10 which is already double booked.
// The sixth event (25, 55) can be booked, as the time in [25, 40) will be double booked with the third event;
// the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.


// Note:

// The number of calls to MyCalendar.book per test case will be at most 1000.
// In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].

class MyCalendarTwo {
    constructor() {
        this.singleBookings = []
        this.doubleBookings = []
    }

    conflicts(bookings: [number, number][], start: number, end: number): boolean {
        for (let i = 0; i < bookings.length; i++) {
            const booking = bookings[i]
            if (!(start >= booking[1]) && !(end <= booking[0])) {
                console.log(`  conflict found between (${start},${end}) and (${booking[0]},${booking[1]})`)
                return true
            }
        }

        return false
    }

    processBookings(): void {
        console.log(`processing bookings`)

        // We just added a booking, so let's restore the ordering.
        this.singleBookings.sort((a,b) => { return a[0] - b[0] })

        // Now, see if there are any double-booked times in the singly-booked
        // list. If we find any, move the relevant times to the doubly-booked list.
        for (let i = 0; i < this.singleBookings.length - 1; i++) {
            for (let j = i + 1; j < this.singleBookings.length; j++) {
                let booking1 = this.singleBookings[i]
                let booking2 = this.singleBookings[j]
                console.log(`  comparing booking1(${booking1[0]},${booking1[1]}) and booking2(${booking2[0]},${booking2[1]})`)
                if (!(booking2[0] >= booking1[1]) && !(booking2[1] <= booking1[0])) {
                    const doubleBooking: [number, number] = [Math.max(booking1[0], booking2[0]), Math.min(booking1[1], booking2[1])]
                    this.doubleBookings.push(doubleBooking)
                    console.log(`  created a doubly-booked time (${doubleBooking[0]},${doubleBooking[1]})`)

                    booking1[0] = Math.min(booking1[0], doubleBooking[0], booking2[0])
                    booking2[1] = Math.max(booking1[1], doubleBooking[1], booking2[1])

                    booking1[1] = doubleBooking[0]
                    booking2[0] = doubleBooking[1]
                    console.log(`  updated booking1 to (${booking1[0]},${booking1[1]}) and booking2 to (${booking2[0]}, ${booking2[1]}) `)
                }
            }
        }

        // Restore the ordering.
        this.doubleBookings.sort((a,b) => { return a[0] - b[0] })
    }

    book(start: number, end: number): boolean {
        console.log(`book(${start}, ${end}) called`)
        // If the requested booking conflicts with any already double-booked times,
        // then reject it.
        if (this.conflicts(this.doubleBookings, start, end)) {
            console.log(`  conflicts with a double-booking, returning false`)
            return false
        }

        // Otherwise, add a booking and do the bookkeeping.
        else {
            console.log(`  does not conflict with any double-booking, adding and returning true`)
            this.singleBookings.push([start, end])
            this.processBookings()
            return true
        }
    }

    singleBookings: [number, number][]
    doubleBookings: [number, number][]
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

const cal2: MyCalendarTwo = new MyCalendarTwo();

console.log(cal2.book(10, 20)) // returns true
// single-booked (10,20) --- double-booked ()

console.log(cal2.book(50, 60)) // returns true
// single-booked (10,20) (50,60) --- double-booked ()

console.log(cal2.book(10, 40)) // returns true
// single-booked (10,10) (20,40) (50,60) --- double-booked (10,20)

console.log(cal2.book(5, 15)) // returns false
// single-booked (10,10) (20,40) (50,60) --- double-booked (10,20)

console.log(cal2.book(5, 10)) // returns true
// single-booked (5,10) (10,10) (20,40) (50,60) --- double-booked (10,20)

console.log(cal2.book(25, 55)) // returns true
// single-booked (5,10) (10,10) (20,25) (55,60) --- double-booked (10,20) (25,40) (40,55)

// console.log(cal2.book(47,50)) // returns true
// // single-booked (47,50) --- double-booked ()

// console.log(cal2.book(1,10))  // returns true
// // single-booked (1,10) (47,50) --- double-booked ()

// console.log(cal2.book(27,36)) // returns true
// // single-booked (1,10) (27,36) (47,50) --- double-booked ()

// console.log(cal2.book(40,47)) // returns true
// // single-booked (1,10) (27,36) (40,47) (47,50) --- double-booked ()

// console.log(cal2.book(20,27)) // returns true
// // single-booked (1,10) (20,27) (27,36) (40,47) (47,50) --- double-booked ()

// console.log(cal2.book(15,23)) // returns true
// // single-booked (1,10) (15,20) (23,27) (27,36) (40,47) (47,50) --- double-booked (20,23)

// console.log(cal2.book(10,18)) // returns true
// // single-booked (1,10) (10,15) (18,20) (23,27) (27,36) (40,47) (47,50) --- double-booked (15,18) (20,23)

// console.log(cal2.book(27,36)) // returns true
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) (47,50) --- double-booked (15,18) (20,23) (27,36)

// console.log(cal2.book(17,25)) // returns false
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) (47,50) --- double-booked (15,18) (20,23) (27,36)

// console.log(cal2.book(8,17)) // returns false
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) (47,50) --- double-booked (15,18) (20,23) (27,36)

// console.log(cal2.book(24,33)) // returns false
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) (47,50) --- double-booked (15,18) (20,23) (27,36)

// console.log(cal2.book(23,28)) // returns false
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) (47,50) --- double-booked (15,18) (20,23) (27,36)

// console.log(cal2.book(21,27)) // returns false
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) (47,50) --- double-booked (15,18) (20,23) (27,36)

// console.log(cal2.book(47,50)) // returns true
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) --- double-booked (15,18) (20,23) (27,36) (47,50)

// console.log(cal2.book(14,21)) // returns false
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) --- double-booked (15,18) (20,23) (27,36) (47,50)

// console.log(cal2.book(26,32)) // returns false
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) --- double-booked (15,18) (20,23) (27,36) (47,50)

// console.log(cal2.book(16,21)) // returns false
// // single-booked (1,10) (10,15) (18,20) (23,27) (40,47) --- double-booked (15,18) (20,23) (27,36) (47,50)

// console.log(cal2.book(2,7)) // returns true
// // single-booked (1,2) (7,10) (10,15) (18,20) (23,27) (40,47) --- double-booked (2,7) (15,18) (20,23) (27,36) (47,50)

// console.log(cal2.book(24,33)) // returns false
// // single-booked (1,2) (7,10) (10,15) (18,20) (23,27) (40,47) --- double-booked (2,7) (15,18) (20,23) (27,36) (47,50)

// [[6,13],[44,50],[33,39],[30,36],[6,15],[21,27],[49,50],[38,45],[4,12],[46,50],[13,21]]

// [false,false,false,false,false,false,false,true,false,false,false]
