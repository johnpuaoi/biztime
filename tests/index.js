"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BizTime_js_1 = __importDefault(require("../BizTime.js"));
// Create an instance
var bizHours = new BizTime_js_1.default({
    sunday: { isWorkingDay: false, times: [''] },
    // {day}.times should be in hh:mm:ss 24hr format, times[0] is the start time and times [1] is the end time.
    monday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    tuesday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    wednesday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    thursday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    friday: { isWorkingDay: true, times: ['09:00:00', '17:00:00'] },
    saturday: { isWorkingDay: false, times: [] },
});
// // Initialize working days
// bizHours.init();
// // Get test el
// const testEl = document.querySelector('#test');
// const today = new Date();
// const isWorkingDay = bizHours.isWorkingDay(today);
// if (testEl !== null) {
//   testEl.innerHTML = isWorkingDay.toString();
// }
console.log('ranask');
