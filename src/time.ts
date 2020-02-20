/**
 * @author WMXPY
 * @namespace Time
 * @description Time
 */

import { TIMEZONE } from "./declare";

export class Time {

    public static withDate(date: Date, zone: TIMEZONE): Time {

        const cloned: Date = new Date(date.getTime());
        return new Time(cloned, zone);
    }

    public static withTime(time: number, zone: TIMEZONE): Time {

        const date: Date = new Date(time);
        return new Time(date, zone);
    }

    private readonly _date: Date;
    private readonly _zone: TIMEZONE;

    private constructor(date: Date, zone: TIMEZONE) {

        this._date = date;
        this._zone = zone;
    }
}