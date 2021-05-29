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
export default class BizTime {
    private locale;
    constructor(locale: Locale);
    private workingDays;
    private getWorkingDays;
    init(): void;
    private hasValidTimes;
    private convertToMill;
    private getTodaysStartTime;
    private getTodaysEndTime;
    isWorkingDay(dayToCheck: Date): boolean;
    isWorkingTime(timeToCheck: Date): boolean;
}
export {};
