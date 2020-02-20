/**
 * @author WMXPY
 * @namespace Archive
 * @description Format
 */

import { TIME_IN_MILLISECONDS } from "@sudoo/magic";
const TIME_START_YEAR = 1970;

export type PreFormatResult = {

    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
};

// tslint:disable-next-line: variable-name
export const UNSAFE_PreFormat = (utc: number): PreFormatResult => {

    const year: number = Math.floor(utc / TIME_IN_MILLISECONDS.YEAR);

    return {
        year: year + TIME_START_YEAR,
        month: Math.floor((utc % TIME_IN_MILLISECONDS.YEAR) / TIME_IN_MILLISECONDS.MONTH),
        day: Math.floor((utc % TIME_IN_MILLISECONDS.MONTH) / TIME_IN_MILLISECONDS.DAY),
        hour: Math.floor((utc % TIME_IN_MILLISECONDS.DAY) / TIME_IN_MILLISECONDS.HOUR),
        minute: Math.floor((utc % TIME_IN_MILLISECONDS.HOUR) / TIME_IN_MILLISECONDS.MINUTE),
        second: Math.floor((utc % TIME_IN_MILLISECONDS.MINUTE) / TIME_IN_MILLISECONDS.SECOND),
        millisecond: (utc % TIME_IN_MILLISECONDS.SECOND),
    };
};
