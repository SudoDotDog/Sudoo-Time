/**
 * @author WMXPY
 * @namespace Time
 * @description Util
 */

import { TIMEZONE } from "./declare";

export const verifyZoneOffset = (zone: number): boolean => {

    const reverseCheckResult: string = TIMEZONE[zone];
    return typeof reverseCheckResult === 'string';
};

export const fixInteger = (target: number): number => {

    return Math.floor(Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, target)));
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
