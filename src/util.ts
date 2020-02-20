/**
 * @author WMXPY
 * @namespace Time
 * @description Util
 */

import { TIMEZONE } from "./declare";

const MAX_TIME_INTEGER = 9007199254740991;

export const verifyZoneOffset = (zone: number): boolean => {

    const reverseCheckResult: string = TIMEZONE[zone];
    return typeof reverseCheckResult === 'string';
};

export const fixTimeInteger = (target: number): number => {

    return Math.floor(Math.min(MAX_TIME_INTEGER, Math.max(0, target)));
}

export const fixYear = (year: number): number => {

    if (year < 1970) {
        return 0;
    }

    return year - 1970;
};

export const fixMonth = (month: number): number => {

    return month - 1;
};
