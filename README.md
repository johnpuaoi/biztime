# biztime

Determine if a time is during business hours.

## Usage

```Typescript
import BizTime from 'biztime';

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



/*

interface holiday {
  isOpen: boolean | null;
  date: string;
  times: string[];
}

*/

// Instantiate new biztime
// Pass a locale to the constructor, along with an array of holiday objects

const bizHours = new BizTime({
    sunday: { isWorkingDay: false, times: []},
    // {day}.times should be in hh:mm:ss 24hr format, times[0] is the opening time and times[1] is the closed time.
    monday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    tuesday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    wednesday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    thursday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    friday: { isWorkingDay: true, times: ['09:00:00', '17:00:00']},
    saturday: { isWorkingDay: false, times: []},
}, [
    {
      // Open on holiday or closed
      isOpen: false,
      // Date format should me mm/dd/yyyy
      date: '12/25/2021',
      // If business is open, set hours here in hh:mm:ss 24hr format times[0] is the opening time and times[1] is the closed time,
      times: [],
    },
  ]);


// Call Init function to allow biztime to know what days are working days

bizHours.init();

// Check if its a working day
// isWorkingDay() takes in a Date and returns a boolean based on the locale & holidays you set

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
