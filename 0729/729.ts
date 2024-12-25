// 729. My Calendar I

// Implement a MyCalendar class to store your events. A new event can be added if adding
// the event will not cause a double booking.

// Your class will have the method, book(int start, int end). Formally, this represents a
// booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

// A double booking happens when two events have some non-empty intersection (ie., there is
// some time that is common to both events.)

// For each call to the method MyCalendar.book, return true if the event can be added to the
// calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

// Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

// Example 1:

// MyCalendar();
// MyCalendar.book(10, 20); // returns true
// MyCalendar.book(15, 25); // returns false
// MyCalendar.book(20, 30); // returns true
// Explanation:
// The first event can be booked.  The second can't because time 15 is already booked by another event.
// The third event can be booked, as the first event takes every time less than 20, but not including 20.


// Note:

// The number of calls to MyCalendar.book per test case will be at most 1000.
// In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].

class MyCalendar {
    constructor() {
        this.entries = []
    }

    book(start: number, end: number): boolean {
        let canBook = true

        for (let i = 0; i < this.entries.length; i++) {
            let entry = this.entries[i]
            console.log(`comparing requested time [${start}, ${end}] against booked entry [${entry[0]}, ${entry[1]}]`)

            // Case 1: Requested time is entirely before event.
            if (start < entry[0] && end <= entry[0]) {
                console.log(`  case 1`)
                canBook = true
            }

            // Case 2: Requested time starts before event, but ends during event.
            else if (start < entry[0] && end > entry[0] && end <= entry[1]) {
                console.log(`  case 2`)
                canBook = false
                break
            }

            // Case 3: Requested time starts before event, and ends after event.
            else if (start < entry[0] && end > entry[1]) {
                console.log(`  case 3`)
                canBook = false
                break
            }

            // Case 4: Requested time starts and ends during event.
            else if (start >= entry[0] && end <= entry[1]) {
                console.log(`  case 4`)
                canBook = false
                break
            }

            // Case 5: Requested time starts during event, but ends after event.
            else if (start >= entry[0] && start < entry[1] && end > entry[1]) {
                console.log(`  case 5`)
                canBook = false
                break
            }

            // Case 6: Requested time is entirely after event.
            else if (start >= entry[1] && end >= entry[1]) {
                console.log(`  case 6`)
                canBook = true
            }
        }

        if (canBook) {
            this.entries.push([start, end])
        }

        return canBook
    }

    entries: [number, number][]
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

let cal = new MyCalendar()
// console.log(cal.book(10, 20)); // returns true
// console.log(cal.book(15, 25)); // returns false
// console.log(cal.book(20, 30)); // returns true

// console.log(cal.book(47,50)); // returns true
// console.log(cal.book(33,41)); // returns true
// console.log(cal.book(39,45)); // returns false
// console.log(cal.book(33,42)); // returns false
// console.log(cal.book(25,32)); // returns true
// console.log(cal.book(26,35)); // returns false
// console.log(cal.book(19,25)); // returns true <-- ?????
// console.log(cal.book(3,8)); // returns true
// console.log(cal.book(8,13)); // returns true
// console.log(cal.book(18,27)); // returns false

// console.log(cal.book(37,50)) // returns true
// console.log(cal.book(33,50)) // returns false <--- ???
// console.log(cal.book(4,17)) // returns true
// console.log(cal.book(35,48)) // returns false
// console.log(cal.book(8,25)) // returns false
