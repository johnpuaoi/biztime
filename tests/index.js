'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var BizTime_js_1 = __importDefault(require('../BizTime.js'));
// Create an instance
var bizHours = new BizTime_js_1.default(
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
      isOpen: true,
      date: '06/01/2021',
      times: ['09:00:00', '12:00:00'],
    },
  ]
);
// Initialize working days
bizHours.init();
var today = new Date();
var isWorkingDay = bizHours.isWorkingDay(today);
var isWorkingTime = bizHours.isWorkingTime(today);
console.log(isWorkingDay);
console.log(isWorkingTime);
