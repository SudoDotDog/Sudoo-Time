/**
 * @author WMXPY
 * @namespace Time
 * @description Util
 */

import { DATE_START_YEAR, MAX_TIME_INTEGER, TIMEZONE } from "./declare";

export const verifyZoneOffset = (zone: number): boolean => {

    const reverseCheckResult: string = TIMEZONE[zone];
    return typeof reverseCheckResult === 'string';
};

export const fixTimeInteger = (target: number): number => {

    return Math.floor(Math.min(MAX_TIME_INTEGER, Math.max(0, target)));
};

export const fixYear = (year: number): number => {

    if (year < DATE_START_YEAR) {
        return 0;
    }

    return year - DATE_START_YEAR;
};

export const fixMonth = (month: number): number => {

    return month - 1;
};
