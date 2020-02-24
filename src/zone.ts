/**
 * @author WMXPY
 * @namespace Time
 * @description Zone
 */

import { TIME_IN_MILLISECONDS } from "@sudoo/magic";
import { TIMEZONE } from "./declare";
import { Time } from "./time";
import { fixMonth } from "./util";

export class TimeZone {

    public static offset(zone: TIMEZONE): TimeZone {

        return new TimeZone(zone);
    }

    private readonly _zone: TIMEZONE;

    private constructor(zone: TIMEZONE) {

        this._zone = zone;
    }

    public fromNow(): Time {

        return Time.withTime(Date.now(), this._zone);
    }

    public fromTime(time: number): Time {

        return Time.withTime(time, this._zone);
    }

    public fromDate(date: Date): Time {

        return Time.withDate(date, this._zone);
    }

    public fromNumber(
        year: number = 1970,
        month: number = 1,
        day: number = 1,
        hour: number = 0,
        minute: number = 0,
        second: number = 0,
        millisecond: number = 0,
    ): Time {

        const date: Date = new Date();

        date.setUTCFullYear(year);
        date.setUTCMonth(fixMonth(month));
        date.setUTCDate(day);
        date.setUTCHours(hour);
        date.setUTCMinutes(minute);
        date.setUTCSeconds(second);
        date.setUTCMilliseconds(millisecond);

        const preUTCTime: number = date.getTime();
        const fixedUTCTime: number = preUTCTime + this.getTimeOffset();

        return Time.withTime(fixedUTCTime, this._zone);
    }

    public getTimeOffset(): number {

        return Math.floor(this._zone * TIME_IN_MILLISECONDS.HOUR);
    }
}
