/**
 * @author WMXPY
 * @namespace Time
 * @description Time
 */

export class Time {

    public static create(date: Date, zone: number): Time {

        const cloned: Date = new Date(date.getTime());
        return new Time(cloned, zone);
    }

    private readonly _date: Date;
    private readonly _zone: number;

    private constructor(date: Date, zone: number) {


    }
}