/**
 * @author WMXPY
 * @namespace Time
 * @description Duration
 */

import { TIME_CHANGE } from "@sudoo/magic";

const floorIfNeeded = (value: number, floor?: boolean): number => {

    if (typeof floor !== 'boolean') {
        return value;
    }

    if (floor) {
        return Math.floor(value);
    }

    return value;
};

const getAssertNumber = (value?: number): number => {

    if (typeof value === 'number') {
        return value;
    }

    return 0;
};

export type DurationConfig = {

    readonly days?: number;
    readonly hours?: number;
    readonly minutes?: number;
    readonly seconds?: number;
    readonly milliseconds?: number;
};

export class Duration {

    public static of(config: DurationConfig): Duration {

        return new Duration(config);
    }

    private readonly _milliseconds: number;

    private constructor(config: DurationConfig) {

        this._milliseconds = this._parseMilliseconds(config);
    }

    public toMilliseconds(): number {

        return this._milliseconds;
    }

    public toSeconds(floor?: boolean): number {

        return floorIfNeeded(
            this.toMilliseconds() / 1000,
            floor,
        );
    }

    public toMinutes(floor?: boolean): number {

        return floorIfNeeded(
            this.toSeconds() / TIME_CHANGE.SECOND_TO_MINUTE,
            floor,
        );
    }

    public toHours(floor?: boolean): number {

        return floorIfNeeded(
            this.toMinutes() / TIME_CHANGE.MINUTE_TO_HOUR,
            floor,
        );
    }

    public toDays(floor?: boolean): number {

        return floorIfNeeded(
            this.toHours() / TIME_CHANGE.HOUR_TO_DAY,
            floor,
        );
    }

    private _parseMilliseconds(config: DurationConfig): number {

        let milliseconds: number = 0;

        milliseconds += getAssertNumber(config.milliseconds);
        milliseconds += getAssertNumber(config.seconds) * 1000;
        milliseconds += getAssertNumber(config.minutes) * 1000 * TIME_CHANGE.SECOND_TO_MINUTE;
        milliseconds += getAssertNumber(config.hours) * 1000 * TIME_CHANGE.SECOND_TO_MINUTE * TIME_CHANGE.MINUTE_TO_HOUR;
        milliseconds += getAssertNumber(config.days) * 1000 * TIME_CHANGE.SECOND_TO_MINUTE * TIME_CHANGE.MINUTE_TO_HOUR * TIME_CHANGE.HOUR_TO_DAY;

        return milliseconds;
    }
}
