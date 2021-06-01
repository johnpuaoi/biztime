interface Locale {
    sunday: {
        isWorkingDay: boolean;
        times: string[];
    };
    monday: {
        isWorkingDay: boolean;
        times: string[];
    };
    tuesday: {
        isWorkingDay: boolean;
        times: string[];
    };
    wednesday: {
        isWorkingDay: boolean;
        times: string[];
    };
    thursday: {
        isWorkingDay: boolean;
        times: string[];
    };
    friday: {
        isWorkingDay: boolean;
        times: string[];
    };
    saturday: {
        isWorkingDay: boolean;
        times: string[];
    };
}
interface holiday {
    isOpen: boolean | null;
    date: string;
    times: string[];
}
export default class BizTime {
    private locale;
    private holidays;
    constructor(locale: Locale, holidays: holiday[]);
    private workingDays;
    private getWorkingDays;
    init(): void;
    private hasValidTimes;
    private convertToMill;
    private getTodaysStartTime;
    private getTodaysEndTime;
    private getHolidayStartTime;
    private getHolidayEndTime;
    private getMonth;
    private getDay;
    private isHoliday;
    private isOpenOnHoliday;
    isWorkingDay(dayToCheck: Date): boolean;
    isWorkingTime(timeToCheck: Date): boolean;
}
export {};
