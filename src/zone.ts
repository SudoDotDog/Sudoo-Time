/**
 * @author WMXPY
 * @namespace Time
 * @description Zone
 */

import { TIME_IN_MILLISECONDS } from "@sudoo/magic";
import { ZONE_SYMBOL } from "./declare";
import { ZONE_AREA } from "./static";
import { Time } from "./time";
import { fixMonth } from "./util";

export class TimeZone {

    public static offset(zone: ZONE_SYMBOL | ZONE_AREA): TimeZone {

        return new TimeZone(zone);
    }

    private readonly _zone: ZONE_SYMBOL | ZONE_AREA;

    private constructor(zone: ZONE_SYMBOL | ZONE_AREA) {

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
