interface Locale {
  sunday: { isWorkingDay: boolean; times: string[] };
  monday: { isWorkingDay: boolean; times: string[] };
  tuesday: { isWorkingDay: boolean; times: string[] };
  wednesday: { isWorkingDay: boolean; times: string[] };
  thursday: { isWorkingDay: boolean; times: string[] };
  friday: { isWorkingDay: boolean; times: string[] };
  saturday: { isWorkingDay: boolean; times: string[] };
}

export default class BizTime {
  constructor(private locale: Locale) {}

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

  private convertToMill(time: string): number {
    let ms: number =
      Number(time.split(':')[0]) * 60 * 60 * 1000 +
      Number(time.split(':')[1]) * 60 * 1000;

    return ms;
  }

  private getTodaysStartTime(): number {
    const today: number = new Date().getDay();
    let todayAsMs: number = 0;
    const startTime = this.locale.sunday.times[0];

    switch (today) {
      case 0:
        todayAsMs = this.convertToMill(this.locale.sunday.times[0]);
        break;
      case 1:
        todayAsMs = this.convertToMill(this.locale.monday.times[0]);
        break;
      case 2:
        todayAsMs = this.convertToMill(this.locale.tuesday.times[0]);
        break;
      case 3:
        todayAsMs = this.convertToMill(this.locale.wednesday.times[0]);
        break;
      case 4:
        todayAsMs = this.convertToMill(this.locale.thursday.times[0]);
        break;
      case 5:
        todayAsMs = this.convertToMill(this.locale.friday.times[0]);
        break;
      case 6:
        todayAsMs = this.convertToMill(this.locale.saturday.times[0]);
        break;
    }

    return todayAsMs;
  }

  private getTodaysEndTime(): number {
    const today: number = new Date().getDay();
    let todayAsMs: number = 0;
    const startTime = this.locale.sunday.times[0];

    switch (today) {
      case 0:
        todayAsMs = this.convertToMill(this.locale.sunday.times[1]);
        break;
      case 1:
        todayAsMs = this.convertToMill(this.locale.monday.times[1]);
        break;
      case 2:
        todayAsMs = this.convertToMill(this.locale.tuesday.times[1]);
        break;
      case 3:
        todayAsMs = this.convertToMill(this.locale.wednesday.times[1]);
        break;
      case 4:
        todayAsMs = this.convertToMill(this.locale.thursday.times[1]);
        break;
      case 5:
        todayAsMs = this.convertToMill(this.locale.friday.times[1]);
        break;
      case 6:
        todayAsMs = this.convertToMill(this.locale.saturday.times[1]);
        break;
    }

    return todayAsMs;
  }

  isWorkingDay(dayToCheck: Date): boolean {
    // Get day as number
    const day: number = dayToCheck.getDay();

    // Check if current day matches as working day then return result;
    const result = this.workingDays.some((workingDay) => day === workingDay);

    return result;
  }

  isWorkingTime(timeToCheck: Date): boolean {
    const hours = timeToCheck.getHours();
    const minutes = timeToCheck.getMinutes();
    const seconds = timeToCheck.getSeconds();
    const time: string = `${hours}:${minutes}:${seconds}`;

    const timeAsMS = this.convertToMill(time);
    const startTime: number = this.getTodaysStartTime();
    const endTime: number = this.getTodaysEndTime();

    if (timeAsMS >= startTime && timeAsMS <= endTime) {
      return true;
    } else {
      return false;
    }
  }
}
