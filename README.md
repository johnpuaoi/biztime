# biztime

Determine if a time is during business hours.

## Usage

```Typescript
import BizTime from 'biztime;

/*

interface Locale {
    sunday: { isWorkingDay: boolean; times: string[] };
  monday: { isWorkingDay: boolean; times: string[] };
  tuesday: { isWorkingDay: boolean; times: string[] };
  wednesday: { isWorkingDay: boolean; times: string[] };
  thursday: { isWorkingDay: boolean; times: string[] };
  friday: { isWorkingDay: boolean; times: string[] };
  saturday: { isWorkingDay: boolean; times: string[] };
}

*/

// Instantiate new biztime
// Pass a locale to the constructor.

const bizHours = new BizTime({
    sunday: { isWorkingDay: false, times: ['']},
    // {day}.times should be in hh:mm:ss 24hr format, times[0] is the start time and times [1] is the end time.
    monday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    tuesday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    wednesday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    thursday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    friday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    saturday: { isWorkingDay: false, times: ['09:00:00', '17:00:00']},
})


// Check if its a working day
// isWorkingDay() takes in a Date and returns a boolean

const today = new Date();

const isWorkDay = bizHours.isWorkingDay(today);

if (isWorkDay) {
    // Check if biz is open now
    // isWorkingTime() takes in a Date and returns a boolean
    const isOpen = bizHours.isWorkingTime(today)
    if (isOpen) {
        console.log('Open for business');
        } else {
            console.log('Closed')
        }
}
```
