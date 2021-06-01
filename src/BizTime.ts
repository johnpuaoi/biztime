interface Locale {
  sunday: { isWorkingDay: boolean; times: string[] };
  monday: { isWorkingDay: boolean; times: string[] };
  tuesday: { isWorkingDay: boolean; times: string[] };
  wednesday: { isWorkingDay: boolean; times: string[] };
  thursday: { isWorkingDay: boolean; times: string[] };
  friday: { isWorkingDay: boolean; times: string[] };
  saturday: { isWorkingDay: boolean; times: string[] };
}

interface holiday {
  isOpen: boolean | null;
  date: string;
  times: string[];
}

export default class BizTime {
  constructor(private locale: Locale, private holidays: holiday[]) {}

  private workingDays: number[] = [];

  private getWorkingDays() {
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
  }

  init() {
    this.getWorkingDays();
  }

  private hasValidTimes(times: string[]) {
    if (times.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  private convertToMill(time: string): number {
    let ms: number =
      Number(time.split(':')[0]) * 60 * 60 * 1000 +
      Number(time.split(':')[1]) * 60 * 1000;

    return ms;
  }

  private getTodaysStartTime(): number {
    const today: number = new Date().getDay();
    let todayAsMs: number = 0;

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
  }

  private getTodaysEndTime(): number {
    const today: number = new Date().getDay();
    let todayAsMs: number = 0;

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
  }

  private getHolidayStartTime(): number {
    const today = new Date();
    const month = this.getMonth(today); //months from 1-12
    const day = this.getDay(today);
    const year = today.getFullYear();
    const fullDate = month + '/' + day + '/' + year;

    const holiday = this.holidays.find((date) => date.date === fullDate);

    let holidayAsMs = 0;

    if (holiday) {
      holidayAsMs = this.convertToMill(holiday.times[0]);
    }

    return holidayAsMs;
  }

  private getHolidayEndTime(): number {
    const today = new Date();
    const month = this.getMonth(today); //months from 1-12
    const day = this.getDay(today);
    const year = today.getFullYear();
    const fullDate = month + '/' + day + '/' + year;

    const holiday = this.holidays.find((date) => date.date === fullDate);

    let holidayAsMs = 0;

    if (holiday) {
      holidayAsMs = this.convertToMill(holiday.times[1]);
    }

    return holidayAsMs;
  }

  private getMonth(date: Date): string {
    let month = date.getMonth() + 1;
    let result = month.toString();

    if (month < 10) {
      result = '0' + result.toString();
    }

    return result;
  }

  private getDay(date: Date): string {
    let day = date.getDate();
    let result = day.toString();

    if (day < 10) {
      result = '0' + result.toString();
    }

    return result;
  }

  isHoliday(dayToCheck: Date): boolean {
    const month = this.getMonth(dayToCheck); //months from 1-12
    const day = this.getDay(dayToCheck);
    const year = dayToCheck.getFullYear();

    const fullDate = month + '/' + day + '/' + year;

    console.log('fullDate:', fullDate);

    const result = this.holidays.some((holiday) => holiday.date === fullDate);

    return result;
  }

  private isOpenOnHoliday(dayToCheck: Date): boolean {
    let result;
    const month = this.getMonth(dayToCheck); //months from 1-12
    const day = this.getDay(dayToCheck);
    const year = dayToCheck.getFullYear();

    const fullDate = month + '/' + day + '/' + year;

    const holidayObj = this.holidays.find(
      (holiday) => holiday.date === fullDate
    );

    if (holidayObj?.isOpen) {
      result = true;
    } else {
      result = false;
    }

    return result;
  }

  isWorkingDay(dayToCheck: Date): boolean {
    // Get day as number
    const day: number = dayToCheck.getDay();

    // Check if current day matches as working day then return result;
    let result = this.workingDays.some((workingDay) => day === workingDay);

    // Check for hoiliday
    if (result && this.isHoliday(dayToCheck)) {
      if (this.isHoliday(dayToCheck) && this.isOpenOnHoliday(dayToCheck)) {
        result = true;
      } else {
        result = false;
      }
    }

    return result;
  }

  isWorkingTime(timeToCheck: Date): boolean {
    const hours = timeToCheck.getHours();
    const minutes = timeToCheck.getMinutes();
    const seconds = timeToCheck.getSeconds();
    const time: string = `${hours}:${minutes}:${seconds}`;
    const timeAsMS = this.convertToMill(time);
    let startTime: number;
    let endTime: number;

    if (this.isHoliday(timeToCheck)) {
      startTime = this.getHolidayStartTime();
      endTime = this.getHolidayEndTime();
    } else {
      startTime = this.getTodaysStartTime();
      endTime = this.getTodaysEndTime();
    }

    if (timeAsMS >= startTime && timeAsMS <= endTime) {
      return true;
    } else {
      return false;
    }
  }
}
