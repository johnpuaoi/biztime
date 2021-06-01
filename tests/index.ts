import BizTime from '../BizTime.js';

// Create an instance

const bizHours = new BizTime(
  {
    sunday: { isWorkingDay: false, times: [''] },
    // {day}.times should be in hh:mm:ss 24hr format, times[0] is the start time and times [1] is the end time.
    monday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    tuesday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    wednesday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    thursday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    friday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    saturday: { isWorkingDay: true, times: ['09:00:00', '15:30:00'] },
  },
  [
    {
      isOpen: false,
      date: '06/03/2021',
      times: ['09:00:00', '12:00:00'],
    },
  ]
);

// Initialize working days

bizHours.init();

const today = new Date();

const isWorkingDay = bizHours.isWorkingDay(today);
const isWorkingTime = bizHours.isWorkingTime(today);

console.log(isWorkingDay);
console.log(isWorkingTime);
