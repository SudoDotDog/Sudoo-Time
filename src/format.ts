/**
 * @author WMXPY
 * @namespace Time
 * @description Format
 */

import { padValue, reverseFixMonth } from "./util";

export enum PATTERN_ELEMENT {

    FULL_YEAR = "YYYY",
    SHORT_YEAR = "YY",
    MONTH = "MM",
    DATE = "DD",
    HOUR = "hh",
    MINUTE = "mm",
    SECOND = "ss",
    MILLISECOND = "mls",
    WEEK_DAY = "wkd",
}

export type PreFormatResult = {

    readonly year: number;
    readonly month: number;
    readonly date: number;
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
        date: date.getUTCDate(),
        weekDay: date.getUTCDay(),
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
        millisecond: date.getUTCMilliseconds(),
    };
};

export const formatWithPattern = (preFormatted: PreFormatResult, pattern: string): string => {

    const shortYear: string = String(preFormatted.year).substring(2);

    return pattern.replace(PATTERN_ELEMENT.FULL_YEAR, padValue(preFormatted.year, 4, '0'))
        .replace(PATTERN_ELEMENT.SHORT_YEAR, padValue(shortYear, 2, '0'))
        .replace(PATTERN_ELEMENT.MONTH, padValue(preFormatted.month, 2, '0'))
        .replace(PATTERN_ELEMENT.DATE, padValue(preFormatted.date, 2, '0'))
        .replace(PATTERN_ELEMENT.HOUR, padValue(preFormatted.hour, 2, '0'))
        .replace(PATTERN_ELEMENT.MINUTE, padValue(preFormatted.minute, 2, '0'))
        .replace(PATTERN_ELEMENT.SECOND, padValue(preFormatted.second, 2, '0'))
        .replace(PATTERN_ELEMENT.MILLISECOND, padValue(preFormatted.millisecond, 3, '0'))
        .replace(PATTERN_ELEMENT.WEEK_DAY, padValue(preFormatted.weekDay, 1, '0'));
};
