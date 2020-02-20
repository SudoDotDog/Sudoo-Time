/**
 * @author WMXPY
 * @namespace Time
 * @description Zone
 */

import { Time } from "./time";

export class TimeZone {

    public static offset(zone: number): TimeZone {

        return new TimeZone(zone);
    }

    private readonly _zone: number;

    private constructor(zone: number) {

        this._zone = zone;
    }

    public getNow(): Time {

        return Time.withTime(Date.now(), this._zone);
    }

    public getTime(date: Date): Time {

        return Time.withDate(date, this._zone);
    }
}
