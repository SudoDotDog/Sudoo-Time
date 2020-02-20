/**
 * @author WMXPY
 * @namespace Time
 * @description Time
 */

export class Time {

    public static withDate(date: Date, zone: number): Time {

        const cloned: Date = new Date(date.getTime());
        return new Time(cloned, zone);
    }

    public static withTime(time: number, zone: number): Time {

        const date: Date = new Date(time);
        return new Time(date, zone);
    }

    private readonly _date: Date;
    private readonly _zone: number;

    private constructor(date: Date, zone: number) {


    }
}