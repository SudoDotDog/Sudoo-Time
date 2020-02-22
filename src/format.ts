/**
 * @author WMXPY
 * @namespace Time
 * @description Format
 */

export type PreFormatResult = {

    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly weekDay: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
};

export const preFormat = (date: Date): PreFormatResult => {

    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day: date.getUTCDate(),
        weekDay: date.getUTCDay(),
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
        millisecond: date.getUTCMilliseconds(),
    };
};
