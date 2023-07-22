function getDaysInMonth(year: number, month: number): number {
    // Months in JavaScript Date object are 0-based (January is 0, February is 1, and so on)
    // To get the last day of the month, we set the day to the 0th day of the next month (which is the last day of the current month)
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
}

export class Calendario {
    private currentDate: Date;
    days: Map<number[], any[]>;

    constructor() {
        this.currentDate = new Date();
        this.days = new Map<number[], []>();
        for (let j = 0; j < 12; j++) {
            const numDays = getDaysInMonth(this.currentDate.getFullYear(), j)
            for (let i = 1; i <= numDays; i++) {
                this.days.set(
                    [j + 1, i], []
                )
            }
        }
    }

    getDays(): Map<number[], any[]> {
        return this.days;
    }

    // Get the current date
    getCurrentDate(): Date {
        return this.currentDate;
    }

    // Set a new date for the calendar
    setDate(date: Date): void {
        this.currentDate = date;
    }

    // Get the current month (1-12)
    getCurrentMonth(): number {
        return this.currentDate.getMonth() + 1;
    }

    // Get the current year
    getCurrentYear(): number {
        return this.currentDate.getFullYear();
    }

    getDaysArrayInMonth(): number[] {
        const numDays = getDaysInMonth(this.currentDate.getFullYear(), this.currentDate.getMonth())
        const days = []
        for (let i = 1; i <= numDays; i++) {
            days.push(i)
        }
        return days
    }

    // Helper function to format the date as "YYYY-MM-DD" (e.g., "2023-07-22")
    formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Create a copy of the calendar
    copy(): Calendario {
        const newCalendario = new Calendario();
        newCalendario.setDate(this.currentDate);
        newCalendario.days = new Map(this.days);
        return newCalendario;
    }
}

// Example usage:
const myCalendar = new Calendario();
console.log("Current date:", myCalendar.getCurrentDate());
console.log("Current month:", myCalendar.getCurrentMonth());
console.log("Current year:", myCalendar.getCurrentYear());
myCalendar.days.set([7, 1], ['ciao'])
for (const days of myCalendar.days.keys()) {
    if (myCalendar.days.get(days)!.length != 0) {
        console.log(days, myCalendar.days.get(days))
    }
}

for (const key of myCalendar.days.keys()) {
    console.log(key)
}