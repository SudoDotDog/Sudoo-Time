/**
 * @author WMXPY
 * @namespace Time
 * @description Format
 */

import { padValue, reverseFixMonth } from "./util";

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
        month: reverseFixMonth(date.getUTCMonth()),
        day: date.getUTCDate(),
        weekDay: date.getUTCDay(),
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
        millisecond: date.getUTCMilliseconds(),
    };
};

export const formatWithPattern = (preFormatted: PreFormatResult, pattern: string): string => {

    const shortYear: string = String(preFormatted.year).substring(2);
    // tslint:disable-next-line: no-magic-numbers
    return pattern.replace('YYYY', padValue(preFormatted.year, 4, '0'))
        .replace('YY', padValue(shortYear, 2, '0'))
        .replace('MM', padValue(preFormatted.month, 2, '0'))
        .replace('DD', padValue(preFormatted.day, 2, '0'))
        .replace('hh', padValue(preFormatted.hour, 2, '0'))
        .replace('mm', padValue(preFormatted.minute, 2, '0'))
        .replace('ss', padValue(preFormatted.second, 2, '0'))
        .replace('mls', padValue(preFormatted.millisecond, 3, '0'))
        .replace('d', padValue(preFormatted.weekDay, 1, '0'));
};
