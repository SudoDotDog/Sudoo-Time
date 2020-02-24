/**
 * @author WMXPY
 * @namespace Time
 * @description Time
 */

import { TIMEZONE } from "./declare";
import { preFormat, PreFormatResult } from "./format";
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

    public getTime(): number {
        return this._utc;
    }
    public getDate(): Date {
        return new Date(this._utc);
    }

    public toUTCString(): string {

        const date: Date = new Date(this._utc);
        const pre: PreFormatResult = preFormat(date);
        return ''; // TODO
    }
}
