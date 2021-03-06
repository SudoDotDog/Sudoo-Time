/**
 * @author WMXPY
 * @namespace Time
 * @description Zone
 */

import { TIME_IN_MILLISECONDS } from "@sudoo/magic";
import { TIMEZONE } from "./declare";
import { Time } from "./time";
import { fixMonth } from "./util";

const EPOCH_YEAR = 1970;

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
        year: number = EPOCH_YEAR,
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

        const fixedUTCTime: number = this.reverseFixUTCDate(date);

        return Time.withTime(fixedUTCTime, this._zone);
    }

    public reverseFixUTCDate(date: Date): number {

        const preUTCTime: number = date.getTime();
        return this.reverseFixUTCTime(preUTCTime);
    }

    public reverseFixUTCTime(utcTime: number): number {

        return utcTime - this.getTimeOffset();
    }

    public mergeFromUTCTime(utcTime: number): number {

        return utcTime + this.getTimeOffset();
    }

    public getTimeOffset(): number {

        return Math.floor(this._zone * TIME_IN_MILLISECONDS.HOUR);
    }
}
