/**
 * @author WMXPY
 * @namespace Time
 * @description Zone
 */

import { Time } from "./time";

export class TimeZone {

    public static create(zone: number): TimeZone {

        return new TimeZone(zone);
    }

    private readonly _zone: number;

    private constructor(zone: number) {

        this._zone = zone;
    }

    public getTime(): Time {

        return Time.create(new Date(), this._zone);
    }
}
