/**
 * @author WMXPY
 * @namespace Time
 * @description Time
 */

import { TIMEZONE } from "./declare";
import { fixTimeInteger } from "./util";

export class Time {

    public static withDate(date: Date, zone: TIMEZONE): Time {

        return new Time(date.getTime(), zone);
    }

    public static withTime(time: number, zone: TIMEZONE): Time {

        return new Time(time, zone);
    }

    private readonly _utc: number;
    private readonly _zone: TIMEZONE;

    private constructor(utc: number, zone: TIMEZONE) {

        this._utc = fixTimeInteger(utc);
        this._zone = zone;
    }

    public toUTCString(): string {

        const date = new Date(this._utc);
        return ''; // TODO
    }
}
