"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BizTime = /** @class */ (function () {
    function BizTime(locale, holidays) {
        this.locale = locale;
        this.holidays = holidays;
        this.workingDays = [];
    }
    BizTime.prototype.getWorkingDays = function () {
        //TODO: change to better implementation with loop
        if (this.locale.sunday.isWorkingDay) {
            this.workingDays.push(0);
        }
        if (this.locale.monday.isWorkingDay) {
            this.workingDays.push(1);
        }
        if (this.locale.tuesday.isWorkingDay) {
            this.workingDays.push(2);
        }
        if (this.locale.wednesday.isWorkingDay) {
            this.workingDays.push(3);
        }
        if (this.locale.thursday.isWorkingDay) {
            this.workingDays.push(4);
        }
        if (this.locale.friday.isWorkingDay) {
            this.workingDays.push(5);
        }
        if (this.locale.saturday.isWorkingDay) {
            this.workingDays.push(6);
        }
    };
    BizTime.prototype.init = function () {
        this.getWorkingDays();
    };
    BizTime.prototype.hasValidTimes = function (times) {
        if (times.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    BizTime.prototype.convertToMill = function (time) {
        var ms = Number(time.split(':')[0]) * 60 * 60 * 1000 +
            Number(time.split(':')[1]) * 60 * 1000;
        return ms;
    };
    BizTime.prototype.getTodaysStartTime = function () {
        var today = new Date().getDay();
        var todayAsMs = 0;
        switch (today) {
            case 0:
                if (this.hasValidTimes(this.locale.sunday.times)) {
                    todayAsMs = this.convertToMill(this.locale.sunday.times[0]);
                }
                break;
            case 1:
                if (this.hasValidTimes(this.locale.monday.times)) {
                    todayAsMs = this.convertToMill(this.locale.monday.times[0]);
                }
                break;
            case 2:
                if (this.hasValidTimes(this.locale.tuesday.times)) {
                    todayAsMs = this.convertToMill(this.locale.tuesday.times[0]);
                }
                break;
            case 3:
                if (this.hasValidTimes(this.locale.wednesday.times)) {
                    todayAsMs = this.convertToMill(this.locale.wednesday.times[0]);
                }
                break;
            case 4:
                if (this.hasValidTimes(this.locale.thursday.times)) {
                    todayAsMs = this.convertToMill(this.locale.thursday.times[0]);
                }
                break;
            case 5:
                if (this.hasValidTimes(this.locale.friday.times)) {
                    todayAsMs = this.convertToMill(this.locale.friday.times[0]);
                }
                break;
            case 6:
                if (this.hasValidTimes(this.locale.saturday.times)) {
                    todayAsMs = this.convertToMill(this.locale.saturday.times[0]);
                }
                break;
        }
        return todayAsMs;
    };
    BizTime.prototype.getTodaysEndTime = function () {
        var today = new Date().getDay();
        var todayAsMs = 0;
        switch (today) {
            case 0:
                if (this.hasValidTimes(this.locale.sunday.times)) {
                    todayAsMs = this.convertToMill(this.locale.sunday.times[1]);
                }
                break;
            case 1:
                if (this.hasValidTimes(this.locale.monday.times)) {
                    todayAsMs = this.convertToMill(this.locale.monday.times[1]);
                }
                break;
            case 2:
                if (this.hasValidTimes(this.locale.tuesday.times)) {
                    todayAsMs = this.convertToMill(this.locale.tuesday.times[1]);
                }
                break;
            case 3:
                if (this.hasValidTimes(this.locale.wednesday.times)) {
                    todayAsMs = this.convertToMill(this.locale.wednesday.times[1]);
                }
                break;
            case 4:
                if (this.hasValidTimes(this.locale.thursday.times)) {
                    todayAsMs = this.convertToMill(this.locale.thursday.times[1]);
                }
                break;
            case 5:
                if (this.hasValidTimes(this.locale.friday.times)) {
                    todayAsMs = this.convertToMill(this.locale.friday.times[1]);
                }
                break;
            case 6:
                if (this.hasValidTimes(this.locale.saturday.times)) {
                    todayAsMs = this.convertToMill(this.locale.saturday.times[1]);
                }
                break;
        }
        return todayAsMs;
    };
    BizTime.prototype.getHolidayStartTime = function () {
        var today = new Date();
        var month = this.getMonth(today); //months from 1-12
        var day = this.getDay(today);
        var year = today.getFullYear();
        var fullDate = month + '/' + day + '/' + year;
        var holiday = this.holidays.find(function (date) { return date.date === fullDate; });
        var holidayAsMs = 0;
        if (holiday) {
            holidayAsMs = this.convertToMill(holiday.times[0]);
        }
        return holidayAsMs;
    };
    BizTime.prototype.getHolidayEndTime = function () {
        var today = new Date();
        var month = this.getMonth(today); //months from 1-12
        var day = this.getDay(today);
        var year = today.getFullYear();
        var fullDate = month + '/' + day + '/' + year;
        var holiday = this.holidays.find(function (date) { return date.date === fullDate; });
        var holidayAsMs = 0;
        if (holiday) {
            holidayAsMs = this.convertToMill(holiday.times[1]);
        }
        return holidayAsMs;
    };
    BizTime.prototype.getMonth = function (date) {
        var month = date.getMonth() + 1;
        var result = month.toString();
        if (month < 10) {
            result = '0' + result.toString();
        }
        return result;
    };
    BizTime.prototype.getDay = function (date) {
        var day = date.getDate();
        var result = day.toString();
        if (day < 10) {
            result = '0' + result.toString();
        }
        return result;
    };
    BizTime.prototype.getHoliday = function (dayToCheck) {
        var month = this.getMonth(dayToCheck); //months from 1-12
        var day = this.getDay(dayToCheck);
        var year = dayToCheck.getFullYear();
        var fullDate = month + '/' + day + '/' + year;
        var result = this.holidays.find(function (holiday) { return holiday.date === fullDate; });
        return result;
    };
    BizTime.prototype.isHoliday = function (dayToCheck) {
        var month = this.getMonth(dayToCheck); //months from 1-12
        var day = this.getDay(dayToCheck);
        var year = dayToCheck.getFullYear();
        var fullDate = month + '/' + day + '/' + year;
        var result = this.holidays.some(function (holiday) { return holiday.date === fullDate; });
        return result;
    };
    BizTime.prototype.isOpenOnHoliday = function (dayToCheck) {
        var result;
        var month = this.getMonth(dayToCheck); //months from 1-12
        var day = this.getDay(dayToCheck);
        var year = dayToCheck.getFullYear();
        var fullDate = month + '/' + day + '/' + year;
        var holidayObj = this.holidays.find(function (holiday) { return holiday.date === fullDate; });
        if (holidayObj === null || holidayObj === void 0 ? void 0 : holidayObj.isOpen) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    BizTime.prototype.isWorkingDay = function (dayToCheck) {
        // Get day as number
        var day = dayToCheck.getDay();
        // Check if current day matches as working day then return result;
        var result = this.workingDays.some(function (workingDay) { return day === workingDay; });
        // Check for hoiliday
        if (result && this.isHoliday(dayToCheck)) {
            if (this.isHoliday(dayToCheck) && this.isOpenOnHoliday(dayToCheck)) {
                result = true;
            }
            else {
                result = false;
            }
        }
        return result;
    };
    BizTime.prototype.isWorkingTime = function (timeToCheck) {
        var hours = timeToCheck.getHours();
        var minutes = timeToCheck.getMinutes();
        var seconds = timeToCheck.getSeconds();
        var time = hours + ":" + minutes + ":" + seconds;
        var timeAsMS = this.convertToMill(time);
        var startTime;
        var endTime;
        if (this.isHoliday(timeToCheck)) {
            startTime = this.getHolidayStartTime();
            endTime = this.getHolidayEndTime();
        }
        else {
            startTime = this.getTodaysStartTime();
            endTime = this.getTodaysEndTime();
        }
        if (timeAsMS >= startTime && timeAsMS <= endTime) {
            return true;
        }
        else {
            return false;
        }
    };
    return BizTime;
}());
exports.default = BizTime;
